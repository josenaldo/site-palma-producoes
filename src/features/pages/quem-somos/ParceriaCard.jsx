// const { ButtonLink } = require('@/features/ui')
const { Typography, Button } = require('@mui/material')

export default function ParceriaCard({ parceria }) {
  return (
    <Button
      key={parceria.name}
      color="dark"
      href={parceria.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'text.secondary',
      }}
    >
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        {parceria.name}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          flexGrow: 1,
        }}
      >
        {parceria.description}
      </Typography>
    </Button>
  )
}
