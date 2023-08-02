import { Box, Divider, Typography } from '@mui/material'

import { useMDXComponent } from 'next-contentlayer/hooks'

import {
  Link,
  ResponsiveImage,
  Code,
  Blockquote,
  YoutubeVideo,
} from '@/features/ui'

import styles from './ContentBlock.module.css'

export default function ContentBlock({ body, components = {} }) {
  const content = body?.code || body?.html || body?.raw || body

  const MDXContent = useMDXComponent(content)

  const comp = {
    img: ResponsiveImage,
    h1: (props) => <Typography component="h1" variant="h1" {...props} />,
    h2: (props) => <Typography component="h2" variant="h2" {...props} />,
    h3: (props) => <Typography component="h3" variant="h3" {...props} />,
    h4: (props) => <Typography component="h4" variant="h4" {...props} />,
    h5: (props) => <Typography component="h5" variant="h5" {...props} />,
    h6: (props) => <Typography component="h6" variant="h6" {...props} />,
    p: (props) => <Typography component="p" variant="body1" {...props} />,
    a: Link,
    pre: Code,
    hr: Divider,
    blockquote: Blockquote,
    Youtube: YoutubeVideo,
    ...components,
  }

  return (
    <Box className={styles.markdownBody}>
      <MDXContent components={comp} />
    </Box>
  )
}
