const S3Plugin = require('webpack-s3-plugin');
const wpConfig = require('./webpack.config');

let {
  plugins,
  entry,
  resolve,
  devServer,
  output,
  module: { rules },
  watch,
  context,
  devtool
} = wpConfig;

plugins.push(
  new S3Plugin({
    // Exclude uploading of html
    //exclude: /.*\.html$/,
    // s3Options are required
    s3Options: {
      accessKeyId: 'AKIAJEIHRWORBP7SRGRQ',//process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: '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',//process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-2',
      signatureVersion: 'v3'
    },
    s3UploadOptions: {
      Bucket: 'alpha.wanafam.ly'
    },
    // cdnizerOptions: {
    //   defaultCDNBase: 'http://asdf.ca'
    // }
  })
);


// Webpack config
module.exports = {
  devtool,
  context,
  watch,
  entry,
  output,
  module: { rules },
  resolve,
  plugins,
};
