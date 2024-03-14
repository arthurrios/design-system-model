import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})
export const ToastRoot = styled(Toast.Root, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  position: 'relative',
  width: '22.5rem',
  padding: '$3 $5',

  backgroundColor: '$gray-800',
  borderRadius: '$sm',
  outline: '$space$px solid $colors$gray-600',
})
export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})
export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray-200',
})
export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',

  cursor: 'pointer',

  svg: {
    width: '$5',
    height: '$5',

    color: '$gray-200',
  },
})
export const ToastViewport = styled(Toast.Viewport, {})
