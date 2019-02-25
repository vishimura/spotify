const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev? 'development': 'production',
    entry: './src/index.jsx',
    output: {
        filename: './app.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: "./public",
        port: 8080
    },
    resolve:{
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()... 
                'sass-loader'
            ]
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                'file-loader'
              ]
        },{
            test: /.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
              }
            }
          },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            use: {
                loader: "file-loader",
                options: {
                  limit: 50000,
                },
            }
        }]
    }
}