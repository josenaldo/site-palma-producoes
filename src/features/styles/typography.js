import localFont from 'next/font/local'

const bebasKai = localFont({
  src: './fonts/bebas-kai.ttf',
  variable: '--font-bebas-kai',
})

const workSans = localFont({
  src: [
    {
      path: './fonts/work-sans-regular-variable-weight.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: './fonts/work-sans-italic-variable-weight.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
})

const titleFont = bebasKai

const textFont = workSans

const typography = {
  fontFamily: workSans.style.fontFamily,
  fontWeightLight: 200,
  fontWeightRegular: 300,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    fontFamily: bebasKai.style.fontFamily,
  },

  h2: {
    fontFamily: bebasKai.style.fontFamily,
  },

  h3: {
    fontFamily: bebasKai.style.fontFamily,
  },

  h4: {
    fontFamily: bebasKai.style.fontFamily,
  },

  h5: {
    fontFamily: bebasKai.style.fontFamily,
  },

  h6: {
    fontFamily: bebasKai.style.fontFamily,
  },
  body1: {
    fontFamily: workSans.style.fontFamily,
    fontSize: '1.2rem',
  },
  body2: {
    fontFamily: workSans.style.fontFamily,
    fontSize: '1.1rem',
  },
  body3: {
    fontFamily: workSans.style.fontFamily,
    fontSize: '1rem',
  },
  body4: {
    fontFamily: workSans.style.fontFamily,
    fontSize: '0.8rem',
  },
}

export { titleFont, textFont }
export default typography
