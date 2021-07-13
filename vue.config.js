module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('html-loader')
      .loader('html-loader')
      .end();
  },
};
