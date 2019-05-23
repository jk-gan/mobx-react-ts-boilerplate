module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        targets: {
          browsers: ['last 4 versions', 'ie >= 10'],
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    ['import', { libraryName: 'antd', style: true }],
  ],
};
