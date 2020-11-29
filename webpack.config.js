const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sourceDirectory = path.resolve(__dirname, 'src');
const outputDirectory = path.resolve(__dirname, 'dist');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode !== 'production';
  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
      app: `${sourceDirectory}/index.jsx`,
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, './'),
      publicPath: '/',
      historyApiFallback: true,
      open: true,
    },
    output: {
      filename: isDevelopment ? 'js/[name].js' : 'js/[name].[hash].js',
      path: outputDirectory,
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.stylesheets', 'css', '.gif', '.png', '.jpg', '.jpeg', '.svg'],
      alias: {
        '@': sourceDirectory,
      },
    },
    module: {
      rules: [
        {
          test: /\.([tj])sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
              },
            },
          ],
        },
        {
          test: /\.(csv|tsv)$/,
          use: ['csv-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${sourceDirectory}/index.html`,
        filename: 'index.html',
        title: 'React tuten Test',
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? 'css/[name].css' : 'css/[name].[hash].css',
        chunkFilename: 'css/[id].css',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['css/*.*', 'js/*.*', 'fonts/*.*', 'images/*.*'],
      }),
    ],
  };
};
