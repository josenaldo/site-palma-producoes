import { ParceriaCard } from '@/features/pages/quem-somos'
import { Title } from '@/features/ui'
import { Box, Container } from '@mui/material'

export default function Parcerias({ t, parcerias }) {
  return (
    <Box
      sx={{
        gap: 2,
        backgroundColor: 'surfice.lighter',
        py: 5,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 4,
        }}
      >
        <Title
          variant="h4"
          color="text.secondary"
          borderBottomColor="transparent"
        >
          {t('quem-somos:partners.title')}
        </Title>
      </Container>
      <Container
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 2,
        }}
      >
        {parcerias.map((parceria) => (
          <ParceriaCard key={parceria.name} parceria={parceria} />
        ))}
      </Container>
    </Box>
  )
}
