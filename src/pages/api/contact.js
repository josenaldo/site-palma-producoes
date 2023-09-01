import { render } from '@react-email/render'

import { ContactEmail } from '@/emails'
import { sendEmail } from '@/features/email'

export default async function handler(req, res) {
  //only accept post
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Get parameters from the request body (name, phone, email, message)
  const { name, phone, email, message } = req.body

  // verify parameters and return suitable error code
  if (!name) return res.status(400).json({ error: 'Name is required' })
  if (!phone) return res.status(400).json({ error: 'Phone is required' })
  if (!email) return res.status(400).json({ error: 'Email is required' })
  if (!message) return res.status(400).json({ error: 'Message is required' })

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
