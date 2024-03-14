import { StoryObj, Meta } from '@storybook/react'

import { Tooltip, TooltipProps, Button } from '@arthurrios-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    title: 'October 26th - Available',
    children: <Button>Hover me!</Button>,
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
