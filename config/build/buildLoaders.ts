import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = ({ isDev}: BuildOptions): RuleSetRule[] => {

  const fileLoader =  {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const typescriptLoader =  {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader:  "css-loader",
            options: {
              modules: {
                // настройка имен классов
                // Для модульных файлов (содержащих в пути module) применяем правило, иначе нет
                auto: (resPath: string) => !!resPath.includes('.module.'),
                // В дев сборке классы будут читаемыми и понятными,
                // в проде, исключительно хеш
                localIdentName: isDev
                  ? '[path][name]__[local]--[hash:base64:8]'
                  : '[hash:base64:8]'
              }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }


  return [
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ]
}