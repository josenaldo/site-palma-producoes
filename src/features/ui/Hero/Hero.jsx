import { Box, Typography } from '@mui/material'

import { ButtonLink } from '@/features/ui/ButtonLink'

export default function Hero({
  title,
  titleColor = 'text.light',
  titleHighlightColor = 'primary.main',
  titleVariant = 'h2',
  text,
  textColor = 'text.light',
  textVariant = 'body1',
  CTA = null,
  ctaText,
  ctaHref,
  backgroundColor = 'rgba(255 255 255 / 10%)',
  ctaColor = 'primary',
  ctaTarget = '_self',
  noPadding = false,
}) {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        padding: noPadding ? 0 : 4,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'text.light',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Typography
            component="span"
            variant={titleVariant}
            sx={{
              display: 'inline',
              textAlign: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                color: titleColor,
                '& strong': {
                  fontWeight: 'normal',
                  color: titleHighlightColor,
                },
              }}
            >
              {title}
            </Box>
          </Typography>
        </Box>
        <Typography
          variant={textVariant}
          color={textColor}
          sx={{
            textAlign: 'center',
          }}
        >
          {text}
        </Typography>
        {CTA ? (
          <CTA />
        ) : (
          <ButtonLink
            variant="contained"
            color={ctaColor}
            size="large"
            href={ctaHref}
            target="_self"
            rel={ctaTarget === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {ctaText}
          </ButtonLink>
        )}
      </Box>
    </Box>
  )
}
