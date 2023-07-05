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

  // https://utopia.fyi/type/calculator/?c=600,16,1.125,1536,20,1.333,3,2,600-900-1200-1536&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
  h1: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(1.42rem, calc(0.44rem + 2.63vw), 2.96rem);',
  },

  h2: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(1.27rem, calc(0.65rem + 1.63vw), 2.22rem)',
  },

  h3: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(1.13rem, calc(0.78rem + 0.93vw), 1.67rem)',
  },

  h4: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(1.00rem, calc(0.84rem + 0.43vw), 1.25rem)',
  },

  h5: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(0.89rem, calc(0.86rem + 0.08vw), 0.94rem)',
  },

  h6: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(0.70rem, calc(0.85rem + -0.15vw), 0.79rem)',
  },
  sectionTitle: {
    fontFamily: titleFont.style.fontFamily,
    fontSize: 'clamp(1.42rem, calc(0.44rem + 2.63vw), 2.96rem);',
    fontWeight: 400,
  },
}

export { titleFont, textFont }
export default typography
