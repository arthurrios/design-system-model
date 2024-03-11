import { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@arthurrios-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading will always be a `h2`, but we may alter this with the property `as`.',
      },
    },
  },
}
