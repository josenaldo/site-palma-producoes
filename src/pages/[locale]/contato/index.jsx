import { Box, Container } from '@mui/material'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { pagesContentService } from '@/features/content'
import { PageHeader } from '@/features/ui'
import { ContactForm, ContactList, ContactHero } from '@/features/pages/contato'
import { useTranslation } from '@/features/i18n'

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
  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      isoLocale={isoLocale}
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

        <ContactHero />

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
            gap: 4,
          }}
        >
          <ContactList />
          <ContactForm />
        </Box>
      </Container>
    </AppLayout>
  )
}
