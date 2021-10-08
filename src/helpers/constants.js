export const Commands = Object.freeze({
  HELP: {
    expression: 'help',
    description: 'displays all available commands',
  },
  // TODO: Max P - update Vue Router to dynamically generate the routes and use a constant
  // to do that, then in the values here use the same constant. That way when a new route is
  // added it will automatically be updated in this values list.
  MK_WEBSITE: {
    expression: 'mk website',
    description: `
    creates a graphical user interface (GUI) of this website. Use the
    optional '--go' param with one of it's values to navigate directly
    to any page.
    `,
    options: [{ key: '--go', values: ['about', 'experience', 'home'] }],
  },
});

export default {
  Commands,
};
