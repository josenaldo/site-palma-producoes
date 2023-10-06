import { Box, Typography } from '@mui/material'

const sizeVariantes = {
  small: 'caption',
  medium: 'body3',
  large: 'body2',
  extralarge: 'body1',
}

export default function Tags({
  tags,
  color = 'grey.600',
  onlyFirstTag = false,
  size = 'small',
}) {
  const tagsToShow = onlyFirstTag ? tags.slice(0, 1) : tags
  const variant = sizeVariantes[size] || sizeVariantes.small

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: '0.7rem',
        gap: 1,
        color: color,
        textTransform: 'uppercase',

        '& :not(:last-child)': {
          paddingRight: 1,
          borderRight: '1px solid',
          borderColor: color,
        },
      }}
    >
      {tagsToShow &&
        tagsToShow.map((tag, index) => (
          <Typography variant={variant} key={tag} fontWeight={500}>
            {tag}
          </Typography>
        ))}
    </Box>
  )
}
