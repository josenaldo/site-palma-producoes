import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { pagesContentService } from '@/features/content'
import { Box, Container, Typography } from '@mui/material'
import { Link, PageHeader } from '@/features/ui'
import { ContactForm, ContactList, ContactHero } from '@/features/pages/contato'

export async function getStaticProps({ params }) {
  const propsWrapper = await makeStaticProps(['common', 'contato'])({
    params,
  })
  const locale = params?.locale || 'pt'
  const url = `/${locale}/contato`

  const page = pagesContentService.getPageData(url)

  propsWrapper.props.page = page

  return propsWrapper
}

export { getStaticPaths }

export default function ContatoPage({ isoLocale, page }) {
  const { t } = useTranslation(['common', 'contato'])

  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      isoLocale={isoLocale}
      t={t}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 8,
        }}
      >
        <PageHeader
          title={page.title}
          text={page.body.raw}
          direction="column"
        />

        <ContactHero t={t} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            width: '100%',
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
            justifyContent: 'space-evenly',
            mt: 4,
          }}
        >
          <ContactList t={t} />
          <ContactForm t={t} />
        </Box>
      </Container>
    </AppLayout>
  )
}
