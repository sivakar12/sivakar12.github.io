import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  "viteFinal": async (config) => {
    // Ensure Tailwind CSS is processed
    if (config.css) {
      config.css.preprocessorOptions = {
        ...config.css.preprocessorOptions,
      };
    }
    
    // Ensure Tailwind config is used
    if (config.define) {
      config.define = {
        ...config.define,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      };
    }
    
    return config;
  }
};
export default config;