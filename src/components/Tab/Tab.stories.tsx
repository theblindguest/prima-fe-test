import type { Meta, StoryObj } from '@storybook/react-vite'

import Tab from './Tab'

const meta = {
  component: Tab
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'hi',
    onClickHandler: (tabId) => console.log(tabId),
    tabId: '1',
    variant: 'pill',
    badge: {
      text: 'success',
      style: 'positive'
    }
  }
}
