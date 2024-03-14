import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipTrigger> {
  children: ReactNode
  title: string
}

export function Tooltip({ children, title }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {title}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
