import {
  DefinePlugin, ProgressPlugin, WebpackPluginInstance, HotModuleReplacementPlugin,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => [
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  new HotModuleReplacementPlugin(),
];
