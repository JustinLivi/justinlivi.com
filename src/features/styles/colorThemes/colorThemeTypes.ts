export enum ColorToken {
  primary = 'primary',
  secondary = 'secondary',

  brinkbitBlue = 'brinkbitBlue',
  brinkbitPrimary = 'brinkbitPrimary',
  brinkbitSecondary = 'brinkbitSecondary',
  brinkbitGreyPrimary = 'brinkbitGreyPrimary',
  brinkbitGreySecondary = 'brinkbitGreySecondary',

  sparkPrimary = 'sparkPrimary',
  sparkSecondary = 'sparkSecondary',
  sparkGreyPrimary = 'sparkGreyPrimary',
  sparkGreySecondary = 'sparkGreySecondary',
  sparkGradient1 = 'sparkGradient1',
  sparkGradient2 = 'sparkGradient2',
  sparkGradient3 = 'sparkGradient3',
  sparkGradient4 = 'sparkGradient4',
  sparkGradient5 = 'sparkGradient5',
  sparkGradient6 = 'sparkGradient6',
  sparkGradient7 = 'sparkGradient7',
  sparkGradient8 = 'sparkGradient8',
}

export enum ColorThemeId {
  light,
  dark,
}

export type ColorTheme = Record<ColorToken, string>;
