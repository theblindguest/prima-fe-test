import * as stylex from '@stylexjs/stylex'

export const colors = stylex.defineVars({
  negative: '#ffbfb1',
  neutral: '#f1f1f7',
  positive: '#b1ffc7',
  bg1: '#1b2134',
  bg2: '#343a4e',
  bg3: '#585d71',
  bg4: '#f1f1f7',
  bg5: '#f6f6fa',
  border1: '#d3d3dc',
  border2: '#c4c5cf',
  border3: '#1b2134',
  text: '#1b2134'
})

export const spacing = stylex.defineVars({
  '4xs': '2px',
  '3xs': '4px',
  '2xs': '8px',
  xs: '12px',
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
  '2xl': '48px'
})

export const typography = stylex.defineVars({
  bodySmall: '12px',
  bodyMedium: '14px'
})
