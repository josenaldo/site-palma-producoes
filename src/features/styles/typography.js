import { be } from 'date-fns/locale'
import { Bebas_Neue, Work_Sans } from 'next/font/google'
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

  // TODO - remove this and change to use the Title component
  sectionTitle: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(2.4rem, calc(0.44rem + 2.63vw), 2.96rem);',
    fontWeight: 400,
    textAlign: 'center',
  },
}

export { titleFont, textFont }
export default typography
