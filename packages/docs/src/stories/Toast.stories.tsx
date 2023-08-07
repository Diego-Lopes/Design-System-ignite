/* eslint-disable @typescript-eslint/no-empty-function */
import { Toast, ToastProps } from '@ignite-ui-diego/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Others/Toast',
  component: Toast.Element,
  tags: ['autodocs'],
  args: {
    title: 'Toast Title',
    description: 'Toast Description',
    open: true,
    setOpen: () => {},
    close: () => {},
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
      return (
        <Toast.Provider swipeDirection="right" duration={500}>
          {Story()}
        </Toast.Provider>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Adicione o `Toast.Provider` em volta do `App.tsx` ou da página/componente onde deseja utilizar o Toast e dentro do mesmo utilize o `Toast.Element`. \n\nUtilize um estado booleano para controlar a visibilidade do Toast, passando o `state` na propriedade `open`, o `setState` na propriedade `setOpen` e uma função que que altera o valor do estado para `FALSE` na propriedade `close`.',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
