import { Title } from '@/features/ui/Title'
import { Box, Typography } from '@mui/material'
import slugify from 'slugify'

export default function AnchoredTitle({
  children,
  component = 'h2',
  variant = 'h2',
  ...otherProps
}) {
  const slug = slugify(children, { lower: true })

  return (
    <Box
      id={slug}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        mt: 4,
        mb: 2,
        scrollMarginTop: '150px',
      }}
    >
      <Title
        className="anchor-title"
        component={component}
        variant={variant}
        {...otherProps}
        sx={{
          ...otherProps.sx,
        }}
      >
        {children}
      </Title>
    </Box>
  )
}
