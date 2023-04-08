import { BuildOptions } from "./types/config";
import { Configuration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;

 return {
   mode: mode,
   entry: paths.entry,
   devtool: isDev ? 'inline-source-map' : undefined,
   devServer: isDev ? buildDevServer(options) : undefined,
   output: {
     filename: "[name].[contenthash].js",
     path: paths.output,
     clean: true,
   },
   plugins: buildPlugins(options),
   module: {
     rules: buildLoaders(options),
   },
   resolve: buildResolvers(),
 }
}