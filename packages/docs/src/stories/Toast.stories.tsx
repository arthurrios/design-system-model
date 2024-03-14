import { StoryObj, Meta } from '@storybook/react'

import { Toast, ToastProps } from '@arthurrios-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Schedule done',
    description: 'Wednesday, October 26th at 4:00 PM',
    open: true,
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
