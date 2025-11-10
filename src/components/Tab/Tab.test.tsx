import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Tab, { type TabProps } from './Tab'

vi.mock('@stylexjs/stylex', () => ({
  props: (...args: any[]) => ({ 'stylex-classname': JSON.stringify(args) })
}))

describe('<Tab />', () => {
  const baseProps: TabProps = {
    text: 'Overview',
    tabId: 'overview',
    variant: 'pill',
    onClickHandler: vi.fn()
  }

  it('renders tab text', () => {
    render(<Tab {...baseProps} />)
    expect(screen.getByRole('tab', { name: /overview/i })).toBeInTheDocument()
  })

  it('calls onClickHandler with tabId when clicked', () => {
    const handler = vi.fn()
    render(<Tab {...baseProps} onClickHandler={handler} />)
    fireEvent.click(screen.getByRole('tab'))
    expect(handler).toHaveBeenCalledWith('overview')
  })

  it('applies selected variant styles when isSelected=true', () => {
    const { container } = render(<Tab {...baseProps} isSelected />)
    expect(
      container.querySelector('button')?.getAttribute('stylex-classname')
    ).toContain('pillSelected')
  })

  it('renders badge when provided', () => {
    render(<Tab {...baseProps} badge={{ text: 'New', style: 'info' as any }} />)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('does not render badge when not provided', () => {
    render(<Tab {...baseProps} />)
    expect(screen.queryByText('New')).not.toBeInTheDocument()
  })
})
