import {
  Breadcrumbs as MuiBreadcrumbs,
  Box,
  Container,
  Link,
  Typography,
} from '@mui/material'
import React from 'react'

export default function Breadcrumbs({
  crumbs = [{ text: 'Home', href: '/', last: true }],
}) {
  return (
    <Container sx={{}}>
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        color="primary"
        separator="›"
        maxItems={3}
        itemsAfterCollapse={2}
        sx={{
          width: '100%',
          mb: 2,
          display: 'flex',
          flexDirection: 'row',
          fontWeight: 'bold',

          '.MuiBreadcrumbs-ol': {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'baseline',
            width: '100%',
          },
          '.MuiBreadcrumbs-li': {
            display: 'inline-flex',
          },
          '.MuiBreadcrumbs-separator': {
            flexShrink: 0,
          },
          '.MuiBreadcrumbs-li:not(:last-of-type)': {},
          '.MuiBreadcrumbs-li:last-of-type': {
            flexGrow: 1,
            overflow: 'hidden',
          },
          '.MuiBreadcrumbs-li:last-of-type span': {
            width: '100%',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        }}
      >
        {crumbs.map((crumb, index) => (
          <Crumb key={index} {...crumb} />
        ))}
      </MuiBreadcrumbs>
    </Container>
  )
}

function Crumb({ text, href, last = false }) {
  if (last) {
    return (
      <Typography component="span" color="text.primary">
        {text}
      </Typography>
    )
  }

  return (
    <Link underline="hover" color="inherit" href={href}>
      {text}
    </Link>
  )
}
