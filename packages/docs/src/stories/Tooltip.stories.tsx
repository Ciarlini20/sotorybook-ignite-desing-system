import { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@ciarlini-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    availability: 'available',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$1',
            backgroundColor: '$gray800',
            paddingTop: '$20',
          }}
        >
          {Story()}
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Unavaliable: StoryObj<TooltipProps> = {
  args: {
    availability: 'unavailable',
  },
}
