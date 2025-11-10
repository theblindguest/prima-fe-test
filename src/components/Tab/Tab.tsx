import * as stylex from '@stylexjs/stylex'

import { TabsVariant, Badge } from '../../types'
import styles from './Tab.styles'

export interface TabProps {
  text: string
  onClickHandler: (tabId: string) => void
  tabId: string
  variant: TabsVariant
  isSelected?: boolean
  badge?: {
    text: string
    style: Badge
  }
}

const Tab = ({
  text,
  onClickHandler,
  tabId,
  variant,
  isSelected = false,
  badge
}: TabProps) => (
  <button
    {...stylex.props(
      styles.base,
      styles[variant],
      isSelected && styles[`${variant}Selected`]
    )}
    onClick={() => onClickHandler(tabId)}
    aria-selected={isSelected}
    role="tab"
  >
    {text}
    {badge ? (
      <div {...stylex.props(styles.badge, styles[badge.style])}>
        {badge.text}
      </div>
    ) : null}
  </button>
)

export default Tab
