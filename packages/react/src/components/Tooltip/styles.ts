import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const Provider = styled(TooltipPrimitive.Provider, {})

export const TooltipRoot = styled(TooltipPrimitive.Root, {})

export const TooltipTrigger = styled(TooltipPrimitive.Trigger, {})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  padding: '$3 $4',

  borderRadius: '$sm',
  background: '$gray900',
  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  zIndex: 9999,
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  width: 16,
  height: 8,
})
