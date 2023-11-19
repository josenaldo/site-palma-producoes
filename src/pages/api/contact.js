import { render } from '@react-email/render'

import { ContactEmail } from '@/emails'
import { sendEmail } from '@/features/email'
import axios from 'axios'

export default async function handler(req, res) {
  //only accept post
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Get parameters from the request body (name, phone, email, message)
  const { name, phone, email, message } = req.body.data

  // verify parameters and return suitable error code
  if (!name) return res.status(400).json({ error: 'Name is required' })
  if (!phone) return res.status(400).json({ error: 'Phone is required' })
  if (!email) return res.status(400).json({ error: 'Email is required' })
  if (!message) return res.status(400).json({ error: 'Message is required' })


  const reCaptchaResponse = await axios.post('https://www.google.com/recaptcha/api/siteverify', {}, {
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: req.body.token
    }
  })
  const success = reCaptchaResponse?.data?.success || false
  const score = reCaptchaResponse?.data?.score || 0

  if (success && score > 0.5) {

    //create contact email object
    const contactEmail = ContactEmail({
      name,
      phone,
      email,
      message,
    })

    const html = render(contactEmail)

    await sendEmail({
      from: email,
      to: process.env.SMTP_EMAIL_TO,
      subject: 'Palma - Contato',
      html,
    })

    return res.status(200).json({ message: 'Email sent successfully' })
  }

  return res.status(400).json({ error: 'reCaptcha failed' })
}
