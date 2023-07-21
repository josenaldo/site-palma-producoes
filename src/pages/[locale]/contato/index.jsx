import { useTranslation } from 'next-i18next'

import { getStaticPaths, makeStaticProps } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { pagesContentService } from '@/features/content'
import { Box, Container, Typography } from '@mui/material'
import { ImageBox, Link, PageHeader } from '@/features/ui'
import { contactLinks, socialLinks } from '@/data'
import { useMemo } from 'react'

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
        }}
      >
        <PageHeader
          title={page.title}
          text={page.body.raw}
          direction="column"
        />

        <ProjectCall />

        <Box>
          <Contacts t={t} />
          <ContactForm t={t} />
        </Box>
      </Container>
    </AppLayout>
  )
}

function ProjectCall({ t }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h4">
        Tem um projeto em mente e quer realizá-lo conosco?
      </Typography>
      <Typography variant="body1">
        Nos conte sobre e preencha o formulário! :)
      </Typography>
      <Link href="google.com" color="tertiary.main">
        Clique aqui
      </Link>
    </Box>
  )
}

function Contacts({ t }) {
  const links = useMemo(() => [...contactLinks, ...socialLinks], [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          color="text.dark"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            textDecoration: 'none',
          }}
        >
          <link.icon />
          {link.text}
        </Link>
      ))}
    </Box>
  )
}

function ContactForm({ t }) {
  return <Box></Box>
}
