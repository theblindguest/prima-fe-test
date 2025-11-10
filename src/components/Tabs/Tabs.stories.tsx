import type { Meta, StoryObj } from '@storybook/react-vite'

import Tabs, { TabsProps } from './Tabs'

const meta = {
  component: Tabs
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    tabs: [
      {
        text: 'hello',
        tabId: '1'
      },
      {
        text: 'world',
        tabId: '2',
        badge: {
          text: 'success',
          style: 'positive'
        }
      }
    ] as TabsProps['tabs']
  }
}
