import * as path from 'path';
import * as webpack from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
   entry: {
      "main": './src/main-process/main.ts',
      "renderer": './src/ui/renderer.tsx'
   },
   output: {
      path: path.join(__dirname, 'output-code/'),
      filename: '[name].js'
   },
   target: "electron",
   resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
   },
   module: {
      rules: [
         // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
         {test: /\.tsx?$/, loader: 'ts-loader', options: { silent: true }},
         {
            test: /\.css$/,
            exclude: /(node_modules)/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: [
                  {
                     loader: 'css-loader',
                     options: { sourceMap: true }
                  }
               ]
            })
         },
         {
            test: /\.less$/,
            exclude: /(node_modules)/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: [
                  {
                     loader: 'css-loader',
                     options: { sourceMap: true }
                  },
                  {
                     loader: 'less-loader',
                     options: { sourceMap: true }
                  }
               ]
            })
         },
         {
            test: /\.html$/,
            loader: "raw-loader"
         },
         {
            test: /\.svg(?:[?#]|$)/,
            loader: "url-loader",
            options: { limit: 10000 }
         }, {
            test: /\.png(?:[?#]|$)/,
            loader: "url-loader",
            options: { limit: 10000 }
         }, {
            test: /\.gif(?:[?#]|$)/,
            loader: "url-loader",
            options: { limit: 10000 }
         }, {
            test: /\.jpg(?:[?#]|$)/,
            loader: "url-loader",
            options: { limit: 10000 }
         }
      ],
      noParse: /node_modules\/json-schema\/lib\/validate\.js/
   },
   plugins: getPlugins(),
   externals: getExternals(),
   node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
   },
   devtool: 'source-map'
};

function getPlugins() {
   return [
      new webpack.DefinePlugin({
         "global.GENTLY": false,
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new ExtractTextPlugin({filename: '[name].css'}),
   ];
}

export function getExternals() {
   const modules = [
      'nodegit'
   ];

   let externals: any = {};

   modules.forEach(m => {
      externals[m] = `require("${m}")`;
   });

   return externals;
}