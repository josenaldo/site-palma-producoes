import { Box, Container } from '@mui/material'

import { getStaticPaths } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { ContentPageHeader } from '@/features/content'
import { buildStaticProps } from '@/features/pages/server'
import { ContactForm, ContactList, ContactHero } from '@/features/pages/contato'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'contato')

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
        <ContentPageHeader
          title={page.title}
          text={page.body}
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
