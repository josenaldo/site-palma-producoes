import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { ImageBox } from '@/features/ui'

export default function SociaCard({ socia, onClick, open }) {
  const { t } = useTranslation(['common', 'quem-somos'])
  return (
    <Card
      elevation={0}
      key={socia.url}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'block',
            maxWidth: '300px',
            width: '100%',
          }}
        >
          <ImageBox
            src={socia.image}
            width={500}
            height={500}
            alt={socia.name}
          />
        </Box>
      </CardMedia>
      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          color={open ? 'primary.main' : 'text.primary'}
        >
          {socia.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            textAlign: 'center',
            display: 'inline-block',
            width: '100%',
            textTransform: 'uppercase',
          }}
        >
          {socia.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button size="small" onClick={onClick}>
          {open ? t('common:button.showLess') : t('common:button.showMore')}
        </Button>
      </CardActions>
    </Card>
  )
}
