import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  backgroundColor: '$gray800',
  width: '22.5rem',
  padding: '$3 $5',
  boxSizing: 'border-box',
  border: '1px solid $gray600',
  borderRadius: '$sm',
})

export const ToastHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ToastButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  color: '$gray200',
  width: '$5',
  height: '$5',
  fontWeight: '$bold',
})

export const ToastText = styled('p', {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  marginTop: '$1',
  marginBottom: 0,
})
