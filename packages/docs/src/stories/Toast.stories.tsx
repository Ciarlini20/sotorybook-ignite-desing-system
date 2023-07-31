import { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@ciarlini-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      return <Box css={{ backgroundColor: '$gray900' }}>{Story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
