/** @type { import('@storybook/react').Preview } */

import "../src/index.css";
import "../src/output.css";

const preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
