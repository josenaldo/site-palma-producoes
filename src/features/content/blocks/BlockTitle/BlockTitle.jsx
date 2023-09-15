import { Title } from '@/features/ui'
import { Box, Typography } from '@mui/material'

export default function BlockTitle({
  title,
  subtitle = null,
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
        gap: 4,
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
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            textTransform: 'uppercase',
            fontWeight: '500',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
