import Pill from './pill';

export default {
  title: 'UI/Pill',
  component: Pill,
  tags: ['autodocs']
};

export const WithoutClose = {
  args: {
    text: 'Maryla Rodowicz',
    closeable: false
  }
};

export const WithClose = {
  args: {
    text: 'Maryla Rodowicz',
    closeable: true
  }
};
