import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui-diego/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/diego-lopes.png',
    alt: 'Diego Lopes',
  },
  argTypes: {
    src: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
