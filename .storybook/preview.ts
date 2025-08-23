import type { Preview } from "@storybook/nextjs-vite";
import '../app/globals.css';
import { Signika } from 'next/font/google';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

// Initialize the font for Storybook
const font = Signika({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// Apply the font class to the document
if (typeof document !== 'undefined') {
  document.documentElement.classList.add(font.className);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
