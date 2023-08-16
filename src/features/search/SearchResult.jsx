import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'

import { useTranslation } from '@/features/i18n'
import { Tag, ButtonLink, ShareLink, Link } from '@/features/ui'

export default function SearchResult({ result }) {
  const { t } = useTranslation(['common'])

  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        gap: 2,
      }}
    >
      <CardMedia>
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '150px',
            },
            height: {
              xs: '80px',
              sm: '120px',
              md: '150px',
            },

            position: 'relative',
            backgroundImage: `url(${result.image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '0.4rem',
          }}
        ></Box>
      </CardMedia>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 0,
          pb: '0 !important',
          margin: 0,
          gap: 1,
          height: {
            xs: 'auto',
            sm: 'auto',
            md: '150px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <Tag
            backgroundColor="tertiary.main"
            textColor="text.light"
            label={t(`common:search.results.types.${result.type}`)}
          />

          <Link
            variant="outlined"
            href={result.url}
            skipLocaleHandling
            size="small"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Typography variant="h6" component="h2" color="primary">
              {result.title}
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'block',
            flexGrow: 1,
            height: '100%',
          }}
        >
          <Typography variant="caption" component="p">
            {result.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            alignItems: 'center',
          }}
        >
          <ButtonLink
            variant="outlined"
            href={result.url}
            skipLocaleHandling
            size="small"
          >
            {t('common:search.viewMore')}
          </ButtonLink>

          <ShareLink
            t={t}
            title={result.title}
            description={result.description}
            url={`${process.env.NEXT_PUBLIC_SITE_URL}${result.url}`}
            image={`${process.env.NEXT_PUBLIC_SITE_URL}${result.image}`}
          />
        </Box>
      </CardContent>
    </Card>
  )
}
