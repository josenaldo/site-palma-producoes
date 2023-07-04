import { Bebas_Neue, Work_Sans } from 'next/font/google'

const titleFont = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
})

const textFont = Work_Sans({
  subsets: ['latin'],
})

const typography = {
  fontFamily: textFont.style.fontFamily,

  h1: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(32px, 5vw, 48px)',
  },

  h2: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(28px, 4.5vw, 32px)',
  },

  h3: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(24px, 4vw, 28x)',
  },

  h4: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(20px, 3.5vw, 24px)',
  },

  h5: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(16px, 3vw, 20px)',
  },

  h6: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(12px, 2.5vw, 16px)',
  },
  menuItem: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: '1.5rem',
    color: 'inherit',
  },
}

export { titleFont, textFont }
export default typography
