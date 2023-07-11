/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;