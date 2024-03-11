import { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@arthurrios-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, illum quibusdam! Temporibus facere modi, similique alias commodi quos! Tempore consequatur totam architecto fuga praesentium ducimus dolor ab velit culpa quia.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
