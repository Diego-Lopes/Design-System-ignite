import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui-diego/react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
