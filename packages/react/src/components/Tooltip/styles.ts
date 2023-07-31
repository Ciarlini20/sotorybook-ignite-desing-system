import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipTrigger = styled(Tooltip.Trigger, {
  border: 0,
  color: '$gray100',
  padding: '$4 $6',

  fontFamily: '$default',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    availability: {
      available: {
        backgroundColor: '$gray600',
        borderRadius: '$sm',
      },
      unavailable: {
        backgroundColor: '$gray800',
        borderRadius: 0,
      },
    },
  },

  defaultVariants: {
    availability: 'available',
  },
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(2px)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContainer = styled(Tooltip.Content, {
  margin: 0,
  backgroundColor: '$gray900',
  height: '$12',
  width: '219px',
  padding: '$2 $3',
  borderRadius: '$sm',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',

  userSelect: 'none',
  animationDuration: '200ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})
