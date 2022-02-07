module.exports = {
  src: './src',
  schema: './schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  customScalars: {
    NaiveDateTime: 'String',
    Date: 'String',
    Time: 'String',
  },
};
