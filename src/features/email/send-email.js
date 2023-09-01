import nodemailer from 'nodemailer'

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
}
console.log('🔴🔴 HOST', smtpOptions.host)
console.log('🔴🔴 PORT', smtpOptions.port)

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail(data)
}
