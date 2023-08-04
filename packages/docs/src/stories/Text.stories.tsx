import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui-diego/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fuga explicabo consequatur autem pariatur reprehenderit, facilis illum exercitationem, quam possimus enim delectus et esse odio nisi vel placeat, facere quis!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom strong',
    as: 'strong',
  },
}
