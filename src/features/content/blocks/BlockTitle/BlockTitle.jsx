import { Title } from '@/features/ui'
import { Box } from '@mui/material'

export default function BlockTitle({
  title,
  titleBorderBottomColor = 'primary.main',
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mb: 4,
      }}
    >
      <Title
        variant="h2"
        componente="h1"
        borderBottomColor={titleBorderBottomColor}
        textWrap="wrap"
      >
        {title}
      </Title>
    </Box>
  )
}
