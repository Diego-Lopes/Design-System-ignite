import { ReactNode } from 'react'

import {
  Provider,
  TooltipArrow,
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

interface TooltipProviderProps {
  children: ReactNode
}

function TooltipProvider({ children }: TooltipProviderProps) {
  return <Provider delayDuration={200}>{children}</Provider>
}

export interface TooltipProps {
  text: string
  children: ReactNode
}

TooltipProvider.displayName = 'Tooltip.Provider'

function TooltipElement({ text, children }: TooltipProps) {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipContent sideOffset={5}>
        <TooltipArrow />
        {text}
      </TooltipContent>
    </TooltipRoot>
  )
}

TooltipElement.displayName = 'Tooltip.Element'

export const Tooltip = {
  Provider: TooltipProvider,
  Element: TooltipElement,
}
