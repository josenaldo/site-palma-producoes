import { Box, Typography } from '@mui/material'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Link } from '@/features/ui'
import { BlockResponsiveImage } from '@/features/content/blocks'

import styles from './ContentBlock.module.css'

export default function ContentBlock({ body, content, components = {} }) {
  const contentBody = body?.code || body?.html || body?.raw || body

  const MDXContent = useMDXComponent(contentBody)

  const comp = {
    img: BlockResponsiveImage,
    h1: (props) => <Typography component="h1" variant="h1" {...props} />,
    h2: (props) => <Typography component="h2" variant="h2" {...props} />,
    h3: (props) => <Typography component="h3" variant="h3" {...props} />,
    h4: (props) => <Typography component="h4" variant="h4" {...props} />,
    h5: (props) => <Typography component="h5" variant="h5" {...props} />,
    h6: (props) => <Typography component="h6" variant="h6" {...props} />,
    a: Link,

    ...components,
  }

  return (
    <Box className={styles.markdownBody}>
      <MDXContent components={comp} />
    </Box>
  )
}
