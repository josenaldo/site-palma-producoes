import { Box, Divider } from '@mui/material'

import { MDXProvider } from '@mdx-js/react'
import { Remark } from 'react-remark'

import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'

import externalLinks from 'rehype-external-links'
import rehypePrism from 'rehype-prism-plus'
import rehypeRaw from 'rehype-raw'

import { Link, ResponsiveImage, Code, Blockquote } from '@/features/ui'

import styles from './ContentBlock.module.css'

export default function ContentBlock({ content, components = {} }) {
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
