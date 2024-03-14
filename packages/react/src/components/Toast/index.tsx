import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from '@phosphor-icons/react'

export type ToastProps = ComponentProps<typeof ToastRoot> &
  ComponentProps<typeof ToastClose> & {
    title: string
    description: string
  }

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastContainer>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
