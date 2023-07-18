export const primary = {
  50: '#f0f5e8',
  100: '#d9e6c5',
  200: '#c0d69f',
  300: '#a6c579',
  400: '#93b85c',
  500: '#80ac3f',
  600: '#78a539',
  700: '#6d9b31',
  800: '#639229',
  900: '#50821b',
  A100: '#dcffbc',
  A200: '#c2ff89',
  A400: '#a8ff56',
  A700: '#9bff3c',
  contrastDefaultColor: 'dark',
}

export const secondary = {
  50: '#fdf2e3',
  100: '#fadeba',
  200: '#f6c88c',
  300: '#f2b25d',
  400: '#f0a23b',
  500: '#ed9118',
  600: '#eb8915',
  700: '#e87e11',
  800: '#e5740e',
  900: '#e06208',
  A100: '#ffffff',
  A200: '#ffe5d6',
  A400: '#ffc5a3',
  A700: '#ffb58a',
  contrastDefaultColor: 'dark',
}

export const tertiary = {
  50: '#eee5f0',
  100: '#d4bfda',
  200: '#b794c2',
  300: '#9a69a9',
  400: '#844996',
  500: '#6e2984',
  600: '#66247c',
  700: '#5b1f71',
  800: '#511967',
  900: '#3f0f54',
  A100: '#d88bff',
  A200: '#c758ff',
  A400: '#b525ff',
  A700: '#ad0cff',
  contrastDefaultColor: 'light',
}

export const quaternary = {
  50: '#e0eef4',
  100: '#b3d5e4',
  200: '#80bad3',
  300: '#4d9ec1',
  400: '#2689b3',
  500: '#0074a6',
  600: '#006c9e',
  700: '#006195',
  800: '#00578b',
  900: '#00447b',
  A100: '#a8d2ff',
  A200: '#75b8ff',
  A400: '#429dff',
  A700: '#2990ff',
  contrastDefaultColor: 'light',
}

export const grey = {
  50: '#e8e8e8',
  100: '#c5c5c5',
  200: '#9e9e9e',
  300: '#777777',
  400: '#595959',
  500: '#3c3c3c',
  600: '#363636',
  700: '#2e2e2e',
  800: '#272727',
  900: '#1a1a1a',
  A100: '#e8e8e8',
  A200: '#9e9e9e',
  A400: '#595959',
  A700: '#2e2e2e',
  contrastDefaultColor: 'light',
}

const palette = {
  mode: 'light',

  primary: {
    lighter: primary[100],
    light: primary[300],
    main: primary[500],
    dark: primary[700],
    darker: primary[900],
  },
  secondary: {
    lighter: secondary[100],
    light: secondary[300],
    main: secondary[500],
    dark: secondary[700],
    darker: secondary[900],
  },
  tertiary: {
    lighter: tertiary[100],
    light: tertiary[300],
    main: tertiary[500],
    dark: tertiary[700],
    darker: tertiary[900],
  },
  quaternary: {
    lighter: quaternary[100],
    light: quaternary[300],
    main: quaternary[500],
    dark: quaternary[700],
    darker: quaternary[900],
  },
  surfice: {
    lighter: surfice[100],
    light: surfice[300],
    main: surfice[500],
    dark: surfice[700],
    darker: surfice[900],
  },

  white: {
    main: '#FFFFFF',
  },
  black: {
    main: '#000000',
  },
  dark: {
    main: grey[900],
  },
  light: {
    main: grey[50],
  },

  common: {
    black: '#000000',
    dark: grey[900],
    light: grey[50],
    white: '#FFFFFF',
  },
  text: {
    primary: text[700],
    secondary: text[500],
    dark: text[900],
    light: text[50],
  },
}

export default palette
