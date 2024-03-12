import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray-900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray-900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 'none',
    borderColor: '$ignite-300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:placeholder': {
    color: '$gray-400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
