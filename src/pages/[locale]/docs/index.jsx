import {
  sociaContentService,
  parceriaContentService,
  ContentPage,
} from '@/features/content'
import { getStaticPaths } from '@/features/i18n/server'
import { AppLayout } from '@/features/layout'
import { buildStaticProps } from '@/features/pages/server'

export async function getStaticProps({ params }) {
  const propsWrapper = await buildStaticProps(params, 'docs')

  return propsWrapper
}

export { getStaticPaths }

export default function DocPage({ page }) {
  return (
    <AppLayout
      title={page.title}
      description={page.description}
      image={page.image}
      crumbs={[
        { text: 'Início', href: '/' },
        {
          text: page.title,
          href: page.url,
          last: true,
        },
      ]}
    >
      <ContentPage
        title={page.title}
        image={page.image}
        body={page.body}
        tags={page.tags}
        author={page.author}
        date={page.date}
        url={page.url}
        ns={['common']}
      />
    </AppLayout>
  )
}
