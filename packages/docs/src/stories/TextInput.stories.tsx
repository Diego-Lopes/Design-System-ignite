import type { StoryObj, Meta } from '@storybook/react'

import { TextInput, TextInputProps } from '@ignite-ui-diego/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
