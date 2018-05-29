const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/js/street_fighter.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  devtool: 'source-map'
};
