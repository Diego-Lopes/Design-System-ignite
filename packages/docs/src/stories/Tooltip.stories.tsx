import { Button, Tooltip, TooltipProps } from '@ignite-ui-diego/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Others/Tooltip',
  component: Tooltip.Element,
  tags: ['autodocs'],
  args: {
    text: 'Tooltip text',
    children: <Button variant={'tertiary'}>Hover me</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return <Tooltip.Provider>{Story()}</Tooltip.Provider>
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Adicione o `Tooltip.Provider` em volta do `App.tsx` ou da página/componente onde deseja utilizar o Tooltip e dentro do mesmo utilize o `Toast.Element` envolvendo o elemento que deseja transformar no gatilho do Tooltip.',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
