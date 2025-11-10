import * as stylex from '@stylexjs/stylex'

import { spacing } from '../../tokens.stylex'

const TABLET_UP = '@media (min-width: 768px)'

const tabStyles = stylex.create({
  base: {
    display: 'flex'
  },
  pillSpacing: {
    gap: {
      default: spacing['2xs'],
      [TABLET_UP]: spacing.xs
    }
  },
  underlineSpacing: {
    gap: {
      default: spacing.l,
      [TABLET_UP]: spacing.xl
    }
  }
})

export default tabStyles
