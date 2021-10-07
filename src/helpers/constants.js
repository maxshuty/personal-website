export const HelpDirectory = Object.freeze({
  MK_WEBSITE: {
    command: 'mk website',
    description: 'creates a graphical user interface (GUI) of this website',
    options: [{ prefix: '--go' }],
  },
});

export default {
  HelpDirectory,
};
