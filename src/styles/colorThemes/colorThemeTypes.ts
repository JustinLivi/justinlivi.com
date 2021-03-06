export enum ColorToken {
  primary = 'primary',
  secondary = 'secondary',
  greyPrimary = 'greyPrimary',
  greySecondary = 'greySecondary',
  interactiveHiglightInactive = 'interactiveHiglightInactive',
  interactiveHiglightHover = 'interactiveHiglightHover',
  interactiveHiglightActive = 'interactiveHiglightActive',

  brinkbitBlue = 'brinkbitBlue',
  brinkbitPrimary = 'brinkbitPrimary',
  brinkbitSecondary = 'brinkbitSecondary',
  brinkbitGreyPrimary = 'brinkbitGreyPrimary',
  brinkbitGreySecondary = 'brinkbitGreySecondary',

  sparkPrimary = 'sparkPrimary',
  sparkSecondary = 'sparkSecondary',
  sparkGreyPrimary = 'sparkGreyPrimary',
  sparkGreySecondary = 'sparkGreySecondary',
  sparkGreyTertiary = 'sparkGreyTertiary',
  sparkGradient1 = 'sparkGradient1',
  sparkGradient2 = 'sparkGradient2',
  sparkGradient3 = 'sparkGradient3',
  sparkGradient4 = 'sparkGradient4',
  sparkGradient5 = 'sparkGradient5',
  sparkGradient6 = 'sparkGradient6',
  sparkGradient7 = 'sparkGradient7',
  sparkGradient8 = 'sparkGradient8',
  sparkGreyGradient1 = 'sparkGreyGradient1',
  sparkGreyGradient2 = 'sparkGreyGradient2',
  sparkGreyGradient3 = 'sparkGreyGradient3',
  sparkGreyGradient4 = 'sparkGreyGradient4',
  sparkGreyGradient5 = 'sparkGreyGradient5',
  sparkGreyGradient6 = 'sparkGreyGradient6',
  sparkGreyGradient7 = 'sparkGreyGradient7',
  sparkGreyGradient8 = 'sparkGreyGradient8',
  sparkMonoOrange = 'sparkMonoOrange',
  sparkMonoOrangeDesaturated = 'sparkMonoOrangeDesaturated',
  sparkMonoRed = 'sparkMonoRed',
  sparkMonoRedDesaturated = 'sparkMonoRedDesaturated',
  sparkMonoYellow = 'sparkMonoYellow',
  sparkMonoYellowDesaturated = 'sparkMonoYellowDesaturated',

  hitchdPink = 'hitchdPink',
  hitchdOrange = 'hitchdOrange',
  hitchedLargeColorFill = 'hitchedLargeColorFill',
  hitchdSecondary = 'hitchdSecondary',
  hitchdPinkDesaturated = 'hitchdPinkDesaturated',
  hitchdGreyPrimary = 'hitchdGreyPrimary',
}

export enum ColorThemeId {
  light,
  dark,
}

export type ColorTheme = Record<ColorToken, string>;
