import { ComponentProps } from 'react'
import { TooltipContainer, TooltipTrigger } from './styles'
import * as TooltipComponent from '@radix-ui/react-tooltip'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipTrigger> {
  date: string
  day: string
}

export function Tooltip({
  date = new Date().toUTCString().slice(5, 16),
  day = new Date().toUTCString().slice(5, 7),
  ...props
}: TooltipProps) {
  return (
    <TooltipComponent.Provider>
      <TooltipComponent.Root>
        <TooltipTrigger {...props}>
          <Text>{day}</Text>
        </TooltipTrigger>
        <TooltipComponent.Portal>
          <TooltipContainer>
            <TooltipComponent.Arrow />
            <Text>
              {date} {'  '}-{'  '}
              {props.availability === 'available'
                ? 'Disponível'
                : 'Indisponível'}
            </Text>
          </TooltipContainer>
        </TooltipComponent.Portal>
      </TooltipComponent.Root>
    </TooltipComponent.Provider>
  )
}
