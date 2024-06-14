/** @type { import('@storybook/react').Preview } */

import '../src/output.css';
import '../src/index.css';

const preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
