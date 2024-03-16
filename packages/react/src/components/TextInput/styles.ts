import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray-900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray-900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$ignite-300',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  defaultVariants: {
    size: 'md',
  },
})
export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray-400',
  fontWeight: '$regular',
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray-500',
  },
})
