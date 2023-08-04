import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui-diego/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: 'disabled',
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
