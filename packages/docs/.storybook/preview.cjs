// import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

// import '../../react/src/main.css'
import './global.css'

const preview = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
        theme: themes.dark,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
}

export default preview