import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Tabs, { type TabsProps } from './Tabs'
import { Badge } from '../../types'

vi.mock('@stylexjs/stylex', () => ({
  props: (...args: any[]) => ({ 'stylex-classname': JSON.stringify(args) })
}))

vi.mock('../Tab/Tab', () => ({
  __esModule: true,
  default: ({ text, tabId, onClickHandler, isSelected }: any) => (
    <button
      role="tab"
      data-testid={tabId}
      data-selected={isSelected}
      onClick={() => onClickHandler(tabId)}
    >
      {text}
    </button>
  )
}))

describe('<Tabs />', () => {
  const tabs = [
    { text: 'Overview', tabId: 'overview' },
    { text: 'Settings', tabId: 'settings' },
    {
      text: 'Billing',
      tabId: 'billing',
      badge: { text: 'New', style: 'positive' as Badge }
    }
  ]

  const baseProps: TabsProps = {
    tabs,
    variant: 'pill'
  }

  it('renders all provided tabs', () => {
    render(<Tabs {...baseProps} />)
    expect(screen.getAllByRole('tab')).toHaveLength(3)
    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Billing')).toBeInTheDocument()
  })

  it('returns null if no tabs are provided', () => {
    const { container } = render(<Tabs tabs={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('selects defaultActiveTabId on mount', () => {
    render(<Tabs {...baseProps} defaultActiveTabId="settings" />)
    expect(screen.getByTestId('settings')).toHaveAttribute(
      'data-selected',
      'true'
    )
  })

  it('updates selected tab when another is clicked', () => {
    render(<Tabs {...baseProps} defaultActiveTabId="overview" />)

    const overview = screen.getByTestId('overview')
    const billing = screen.getByTestId('billing')

    // initial state
    expect(overview).toHaveAttribute('data-selected', 'true')
    expect(billing).toHaveAttribute('data-selected', 'false')

    // click billing
    fireEvent.click(billing)

    // now billing should be selected
    expect(billing).toHaveAttribute('data-selected', 'true')
    expect(overview).toHaveAttribute('data-selected', 'false')
  })

  it('applies correct stylex props for base + variant spacing', () => {
    const { container } = render(<Tabs {...baseProps} />)
    const wrapper = container.querySelector('div')
    expect(wrapper?.getAttribute('stylex-classname')).toContain('base')
    expect(wrapper?.getAttribute('stylex-classname')).toContain('pillSpacing')
  })
})
