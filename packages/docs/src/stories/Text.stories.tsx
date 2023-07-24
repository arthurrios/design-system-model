import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@arthurrios-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est totam natus laboriosam? Sit accusantium cum perferendis sapiente. Numquam, provident. Nesciunt odio nobis rerum maiores quam laborum aliquam? Deleniti, sapiente?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
