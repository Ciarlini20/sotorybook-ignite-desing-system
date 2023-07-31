import { ComponentProps } from 'react'
import { ToastButton, ToastContainer, ToastHeader, ToastText } from './styled'
import { Heading } from '../Heading'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  date: string
}

export function Toast({
  date = new Date().toUTCString(),
  ...props
}: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastHeader>
        <Heading>Agendamento realizado</Heading>
        <ToastButton>
          <X size={20} />
        </ToastButton>
      </ToastHeader>
      <ToastText>{date}</ToastText>
    </ToastContainer>
  )
}
