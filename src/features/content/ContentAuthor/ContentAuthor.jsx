import { useTranslation } from '@/features/i18n'
import { Box, Typography } from '@mui/material'

export default function ContentAuthor({ author, variant = 'body1' }) {
  const { t } = useTranslation(['common'])
  if (!author) return null

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
      }}
    >
      <Typography variant={variant}>
        {t('common:blog.author.by')} {author}
      </Typography>
    </Box>
  )
}
