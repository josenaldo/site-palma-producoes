import palette from './palette'
import { titleFont } from './typography'

const components = {
  MuiLink: {
    variants: [
      {
        props: { variant: 'nav' },
        style: {
          fontFamily: titleFont.style.fontFamily,
          fontSize: '1.5rem',
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: palette.primary.main,
          },
        },
      },
      {
        props: { variant: 'plain' },
        style: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    ],
  },
}

export default components
