import { Title } from '@/features/ui/Title'
import { Typography } from '@mui/material'
import slugify from 'slugify'

export default function AnchoredTitle({
  children,
  component = 'h2',
  variant = 'h2',
  ...otherProps
}) {
  const slug = slugify(children, { lower: true })

  return (
    <Title
      className="anchor-title"
      id={slug}
      component={component}
      variant={variant}
      {...otherProps}
      sx={{
        scrollMarginTop: '150px',
        ...otherProps.sx,
      }}
    >
      {children}
    </Title>
  )
}
