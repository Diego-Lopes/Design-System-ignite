import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-diego/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  // tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text size={'sm'}>Observation</Text>
          {Story()}
        </Box>
      )
    },
  ],
  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
