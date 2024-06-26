import {
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CloseIcon from '@mui/icons-material/Close'

import { useTranslation } from '@/features/i18n'

const iconFontSize = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40,
}

const iconSpace = {
  xs: '8px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '16px',
}

function getHrefAndText(t, url, netUrl) {
  const fullUrl = process.env.NEXT_PUBLIC_SITE_URL + url
  const text = t(`common:share.text`)
  const shareUrl = `${text}\n\n${fullUrl}`

  return netUrl + encodeURIComponent(shareUrl)
}

function getHref(t, url, netUrl) {
  const fullUrl = process.env.NEXT_PUBLIC_SITE_URL + url
  return netUrl + fullUrl
}

const networks = [
  {
    key: 'shareFacebook',
    getUrl: (t, url) => {
      return getHref(t, url, 'https://www.facebook.com/sharer/sharer.php?u=')
    },
    Icon: FacebookIcon,
  },
  {
    key: 'shareTwitter',
    getUrl: (t, url) => {
      return getHrefAndText(t, url, 'https://twitter.com/intent/tweet?text=')
    },
    Icon: TwitterIcon,
  },
  {
    key: 'shareLinkedin',
    getUrl: (t, url) => {
      return getHref(
        t,
        url,
        'https://www.linkedin.com/shareArticle?mini=true&url='
      )
    },
    Icon: LinkedInIcon,
  },
  {
    key: 'shareWhatsapp',
    getUrl: (t, url) => {
      return getHrefAndText(t, url, 'https://api.whatsapp.com/send?text=')
    },
    Icon: WhatsAppIcon,
  },
  {
    key: 'shareTelegram',
    getUrl: (t, url) => {
      return getHrefAndText(t, url, 'https://telegram.me/share/url?url=')
    },
    Icon: TelegramIcon,
  },
]

export default function ShareDialog({ description, url, open, onClose }) {
  const { t } = useTranslation(['common'])

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle
        id="alert-dialog-title"
        color="primary"
        sx={{ paddingRight: '40px' }}
      >
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 12,
              color: 'primary.main',
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent
        sx={{
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DialogContentText sx={{ textAlign: 'center' }}>
          <Typography variant="h6" component="div" color="primary">
            {description || t('common:share.text')}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {networks.map((network) => (
          <ShareDialogButton
            t={t}
            url={url}
            key={network.key}
            getUrl={network.getUrl}
            Icon={network.Icon}
            onClick={handleClose}
          />
        ))}
      </DialogActions>
    </Dialog>
  )
}

function ShareDialogButton({ t, getUrl, url, Icon, onClick }) {
  return (
    <Button
      href={getUrl(t, url)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      sx={{
        px: iconSpace,
        color: 'darkGreen.main',
      }}
    >
      <Icon sx={{ fontSize: iconFontSize }} />
    </Button>
  )
}
