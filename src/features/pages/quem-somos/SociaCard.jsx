import {
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
      elevation={open ? 5 : 0}
      key={socia.url}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ImageBox src={socia.image} width={200} height={200} alt={socia.name} />
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
        >
          {socia.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            textAlign: 'center',
            // wordWrap: 'normal',
            display: 'inline-block',
            // width: '100%',
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
