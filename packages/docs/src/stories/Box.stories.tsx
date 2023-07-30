import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps } from '@ignite-ui-diego/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
