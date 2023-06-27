'use client'
import { primaryColor } from './palette'
const components = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        display: 'block',
      },
    },
    variants: [
      {
        props: { variant: 'productTitle' },
        style: {
          fontSize: '1rem',
          fontWeight: '700',
          display: 'block',
          marginBottom: '1rem',
        },
      },
      {
        props: { variant: 'productDescription' },
        style: {
          fontSize: '13px',
          display: 'block',
        },
      },
      {
        props: { variant: 'productPrice' },
        style: {
          fontSize: '1rem',
          fontWeight: '700',
          display: 'block',
          marginTop: '1rem',
          marginBottom: '10px',
        },
      },
      {
        props: { variant: 'facilityTitle' },
        style: {
          fontSize: '1rem',
          fontWeight: '700',
          display: 'block',
          marginBottom: '1rem',
          color: 'primary.main',
        },
      },
    ],
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: '0',

        '& .MuiInputBase-root': {
          borderRadius: '0',
          border: '1px solid #000000',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '0',
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    variants: [
      {
        props: { variant: 'comment' },
        style: {
          padding: '0.5rem',
          borderRadius: '1rem',
        },
      },
    ],
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '1rem',
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: '1rem',
      },
    },
  },
  MuiLink: {
    variants: [
      {
        props: { variant: 'nav' },
        style: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
      {
        props: { variant: 'plain' },
        style: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
      {
        props: { variant: 'cardTitle' },
        style: {
          color: primaryColor[200],
          textDecoration: 'none',
          border: (theme) => `1px solid ${theme.palette.primary.main}`,
          '&:hover': {
            color: primaryColor[400],
          },
        },
      },
    ],
  },
}

export default components
