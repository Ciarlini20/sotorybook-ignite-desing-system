import { themes } from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    parameters: {
      backgrounds: {
        default: 'dark',
        values: [
          {
            name: 'dark',
            value: '#1B1C1D'
          }
        ]
      }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme: themes.dark
    }
  }
}

export default preview
