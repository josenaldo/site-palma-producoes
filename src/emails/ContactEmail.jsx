import { Html } from '@react-email/html'
import { Text } from '@react-email/text'
import { Section } from '@react-email/section'
import { Container } from '@react-email/container'

export default function ContactEmail({ name, phone, email, message }) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Nova mensagem no Site da Palma!</Text>
          <Text style={paragraph}>Nome: {name}</Text>
          <Text style={paragraph}>Telefone: {phone}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>Mensagem: {message}</Text>
        </Container>
      </Section>
    </Html>
  )
}

// Styles for the email template
const main = {
  backgroundColor: '#ffffff',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
}

const heading = {
  fontSize: '3rem',
  lineHeight: '3rem',
  fontWeight: '700',
  color: '#484848',
}

const paragraph = {
  fontSize: '1rem',
  lineHeight: '1rem',
  color: '#484848',
}
