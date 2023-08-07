import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui-diego/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
  args: {},
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
