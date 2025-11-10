import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Tabs from './components/Tabs/Tabs'
import { Badge } from './types'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const tabs = [
  {
    text: 'hello',
    tabId: '1'
  },
  {
    text: 'world',
    tabId: '2',
    badge: {
      text: 'success',
      style: 'positive' as Badge
    }
  }
]

const tabs2 = [
  ...tabs,
  {
    text: 'uh oh',
    tabId: '3',
    badge: {
      text: 'oops',
      style: 'negative' as Badge
    }
  }
]

root.render(
  <React.StrictMode>
    <div
      style={{
        display: 'flex',
        gap: '30px',
        flexDirection: 'column',
        marginBottom: '100px'
      }}
    >
      Example one: tabs using the pill variant
      <Tabs tabs={tabs} defaultActiveTabId="1" />
    </div>
    <div
      style={{
        display: 'flex',
        gap: '30px',
        flexDirection: 'column',
        marginBottom: '100px'
      }}
    >
      Example two: tabs using the underline variant
      <Tabs tabs={tabs2} defaultActiveTabId="1" variant="underline" />
    </div>
  </React.StrictMode>
)
