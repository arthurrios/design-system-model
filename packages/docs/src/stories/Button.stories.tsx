import { StoryObj, Meta } from '@storybook/react'

import {
  Button,
  ButtonProps,
} from '@arthurrios-ignite-ui/react/src/components/Button'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
