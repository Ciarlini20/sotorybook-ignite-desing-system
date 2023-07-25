import { ComponentProps } from 'react'
import { Input, Prefix, TextContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextContainer>
  )
}

TextInput.displayName = 'TextInput'
