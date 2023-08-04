import { Box, Chip, Divider, TextField, Typography } from '@mui/material'

import { useMDXComponent } from 'next-contentlayer/hooks'

import { Link, Code, Blockquote, YoutubeVideo, Carousel } from '@/features/ui'

import styles from './ContentBlock.module.css'
import { ResponsiveImage } from '@/features/content/ResponsiveImage'
import React from 'react'

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
    // p: (props) => <Typography component="span" variant="body1" {...props} />,
    a: Link,
    pre: Code,
    hr: Divider,
    blockquote: Blockquote,
    li: (props) => (
      <Typography
        component="li"
        variant="body1"
        sx={{
          wordWrap: 'break-word',
        }}
        {...props}
      />
    ),
    Youtube: ({ url, props }) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <YoutubeVideo
          url={url}
          {...props}
          sx={{
            my: 4,
            // width: '90%',
          }}
        />
      </Box>
    ),
    Carrossel: ({ children, ...props }) => {
      const cleanedChildren = React.Children.toArray(children).filter(
        (child) => {
          return child !== '\n' && child !== ' '
        }
      )

      return <Carousel {...props}>{cleanedChildren}</Carousel>
    },
    Lista: ({ items, ...props }) => {
      const [filter, setFilter] = React.useState('')

      console.log(items)
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 2,
            my: 2,
          }}
        >
          <Box>
            <TextField
              placeholder="Procure seu nome"
              size="small"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {items
              .filter(
                (item) =>
                  item
                    .toLowerCase()
                    .trim()
                    .indexOf(filter.toLowerCase().trim()) > -1
              )
              .map((item, index) => (
                <Chip key={index} label={item.trim()} />
              ))}
          </Box>
        </Box>
      )
    },
    ...components,
  }

  return (
    <Box className={styles.markdownBody}>
      <MDXContent components={comp} />
    </Box>
  )
}
