import { Bebas_Neue, Work_Sans } from 'next/font/google'
import palette from './palette'

const titleFont = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
})

const textFont = Work_Sans({
  subsets: ['latin'],
})

const typography = {
  fontFamily: textFont.style.fontFamily,

  // https://utopia.fyi/type/calculator/?c=600,16,1.125,1536,20,1.333,3,2,600-900-1200-1536&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
  h1: {
    fontFamily: titleFont.style.fontFamily,
  },

  h2: {
    fontFamily: titleFont.style.fontFamily,
  },

  h3: {
    fontFamily: titleFont.style.fontFamily,
  },

  h4: {
    fontFamily: titleFont.style.fontFamily,
  },

  h5: {
    fontFamily: titleFont.style.fontFamily,
  },

  h6: {
    fontFamily: titleFont.style.fontFamily,
  },

  // pageTitle: {
  //   fontFamily: titleFont.style.fontFamily,
  //   fontSize: 'clamp(1.42rem, calc(0.44rem + 2.63vw), 2.96rem);',
  //   borderBottom: `5px solid ${palette.primary.main}`,
  // },
  // pageSubtitle: {
  //   fontFamily: textFont.style.fontFamily,
  // },
  // TODO - remove this and change to use the Title component
  sectionTitle: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(2.4rem, calc(0.44rem + 2.63vw), 2.96rem);',
    fontWeight: 400,
    textAlign: 'center',
  },
  bigtag: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(3.5rem, 7vw, 7rem)',
    fontWeight: '400',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
}

export { titleFont, textFont }
export default typography
