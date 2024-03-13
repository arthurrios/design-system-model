import type { StorybookConfig } from "@storybook/react-vite";

const Config: StorybookConfig = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: (config, {configType} ) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system-model/'
    }
    return config
  }
};

export default Config;
