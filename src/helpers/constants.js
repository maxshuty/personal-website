export const Commands = Object.freeze({
  MK_WEBSITE: {
    command: 'mk website',
    description: `
    creates a graphical user interface (GUI) of this website. Use the
    optional '--go' param with one of it's values to navigate directly
    to any page.
    `,
    options: [{ prefix: '--go', values: ['about', 'experience', 'home'] }],
  },
});

export default {
  Commands,
};
