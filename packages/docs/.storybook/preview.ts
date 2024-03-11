import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
        theme: {
          ...themes.dark,
          // FontFace: { default: "Roboto, sans-serif"},
        }
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