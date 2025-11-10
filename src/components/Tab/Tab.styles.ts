import * as stylex from '@stylexjs/stylex'

import { typography, spacing, colors } from '../../tokens.stylex'

const TABLET_UP = '@media (min-width: 768px)'

const tabStyles = stylex.create({
  base: {
    fontFamily: "'Inter', 'sans-serif'",
    fontWeight: '700',
    lineHeight: '150%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: {
      default: typography.bodySmall,
      [TABLET_UP]: typography.bodyMedium
    },
    height: {
      default: '42px',
      [TABLET_UP]: '50px'
    },
    outline: {
      default: 'none',
      ':focus': '2px solid #000'
    },
    outlineOffset: {
      default: 0,
      ':focus': '2px'
    }
  },
  pill: {
    color: colors.text,
    borderRadius: '100px',
    border: {
      default: `1px solid ${colors.border1}`
    },
    backgroundColor: {
      default: 'white',
      ':hover': colors.bg5,
      ':active': colors.bg4
    },
    padding: {
      default: `0 ${spacing.xs}`,
      [TABLET_UP]: `0 ${spacing.s}`
    }
  },
  pillSelected: {
    color: 'white',
    border: 'none',
    backgroundColor: {
      default: colors.bg1,
      ':hover': colors.bg2,
      ':active': colors.bg3
    },
    outline: {
      default: 'none',
      ':focus': '2px solid #000'
    },
    outlineOffset: {
      default: 0,
      ':focus': '2px'
    }
  },
  underline: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: {
      default: '3px solid transparent',
      ':hover': `3px solid ${colors.border1}`,
      ':active': `3px solid ${colors.border1}`,
      ':focus': `3px solid ${colors.border1}`
    }
  },
  underlineSelected: {
    borderBottom: `3px solid ${colors.border3}`
  },
  badge: {
    marginLeft: spacing['2xs'],
    color: '#000',
    padding: {
      default: `${spacing['4xs']} ${spacing['3xs']}`,
      [TABLET_UP]: `${spacing['3xs']} ${spacing['2xs']}`
    },
    borderRadius: {
      default: spacing['2xs'],
      [TABLET_UP]: spacing.xs
    }
  },
  positive: {
    backgroundColor: colors.positive
  },
  neutral: {
    backgroundColor: colors.neutral
  },
  negative: {
    backgroundColor: colors.negative
  }
})

export default tabStyles
