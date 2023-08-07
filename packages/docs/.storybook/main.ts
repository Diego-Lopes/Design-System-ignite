import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../storybook-static"],
  features: { storyStoreV7: true },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Design-System-ignite/'
    }

    return config
  }
};

export default config;
