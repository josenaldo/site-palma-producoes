import { Box, Divider, Typography } from '@mui/material'

import { MDXProvider } from '@mdx-js/react'
import { Remark } from 'react-remark'

import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'

import externalLinks from 'rehype-external-links'
import rehypePrism from 'rehype-prism-plus'
import rehypeRaw from 'rehype-raw'

import { Link } from '@/features/ui'
import { ResponsiveImage, Code, Blockquote } from '@/features/content'

import styles from './MarkdownContent.module.css'

export default function MarkdownContent({ content, components = {} }) {
  const remarkPlugins = [
    remarkParse,
    remarkGfm,
    [
      externalLinks,
      {
        target: '_blank',
        rel: ['nofollow', 'noopener', 'noreferrer'],
      },
    ],
  ]

  const rehypePlugins = [rehypeRaw, rehypePrism]

  const comp = {
    img: ResponsiveImage,
    a: Link,
    pre: Code,
    hr: Divider,
    blockquote: Blockquote,
    ...components,
  }

  return (
    <Box className={styles.markdownBody}>
      <MDXProvider>
        <Remark
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
          remarkRehypeOptions={{
            allowDangerousHtml: true,
            footnoteLabel: 'Notas de rodapé',
            footnoteBackLabel: 'Voltar ao conteúdo',
          }}
          rehypeReactOptions={{ components: comp }}
          onError={(error) => {
            console.error(error)
          }}
        >
          {content}
        </Remark>
      </MDXProvider>
    </Box>
  )
}
