import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'

import Tab, { TabProps } from '../Tab/Tab'
import styles from './Tabs.styles'
import { TabsVariant } from '../../types'

type SelectedTabProps = Pick<TabProps, 'text' | 'tabId' | 'badge'>

export interface TabsProps {
  tabs: SelectedTabProps[]
  variant?: TabsVariant
  defaultActiveTabId?: string
}

const Tabs = ({
  tabs,
  variant = 'pill',
  defaultActiveTabId = ''
}: TabsProps) => {
  if (tabs?.length < 1) return null

  const [isSelected, setIsSelected] = useState<string>(defaultActiveTabId)

  const onClickHandler = (tabId: string) => setIsSelected(tabId)

  return (
    <div {...stylex.props(styles.base, styles[`${variant}Spacing`])}>
      {tabs?.map((tab: SelectedTabProps) => {
        const { text, tabId, badge } = tab
        return (
          <Tab
            key={tabId}
            text={text}
            tabId={tabId}
            badge={badge}
            variant={variant}
            isSelected={isSelected === tab.tabId}
            onClickHandler={onClickHandler}
          />
        )
      })}
    </div>
  )
}

export default Tabs
