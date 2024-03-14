import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})
export const TooltipRoot = styled(Tooltip.Root, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipPortal = styled(Tooltip.Portal, {})
export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray-900',
  padding: '$3 $4',
  borderRadius: 5,
  fontWeight: '$medium',
  fontSize: '$sm',
  fontFamily: '$default',

  boxShadow: '$space$1 $space$4 $space$6 0 rgba(0, 0, 0, 0.25)',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  height: 0,
  width: 0,
  borderLeft: '$space$2 solid transparent',
  borderRight: '$space$2 solid transparent',
  borderTop: '$space$2 solid $gray-900',
})
