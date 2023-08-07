module.exports = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: '../vite.config.js'
      }
    },
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  
  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      config.base = "/Design-System-ignite/";
    }

    return await config;
  },
};
