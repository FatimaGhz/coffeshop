var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    entry : {
        app: './src/index.js'

    },
    output:{
        path: path.join(__dirname,"/dist"),
        publicPath:'',
        filename:"main.js"
    },

    mode: "development",

    devServer:{
        contentBase: path.join(__dirname,"/dist"),
        port: 1239,
        writeToDisk: true,
        open: true,
    },

    module :{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          publicPath:'../',
                        esModule: false,
                      },
                    },
                    'css-loader',
                  ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                      name: "[name].[ext]",
                      outputPath: "images",
                    },
                  },
                ],
              },
              {
                  test: /\.(eot|svg|woff|ttf)$/,
                  use :[
                      {
                          loader: "file-loader",
                          options:{
                              name:'[name].[ext]',
                              outputPath:"fonts",
                              esModule:false,
                          }
                      }
                  ]
              }

        ]
    },

   plugins: [
       new HtmlWebpackPlugin({
           filename:"index.html",
           template:"./src/index.html",

       }),
       new HtmlWebpackPlugin({
        filename:"suppliers.html",
        template:"./src/suppliers.html",

    }),
    new HtmlWebpackPlugin({
        filename:"contact.html",
        template:"./src/contact.html",

    }),
    new HtmlWebpackPlugin({
        filename:"about.html",
        template:"./src/about.html",

    }),
    new HtmlWebpackPlugin({
        filename:"product1.html",
        template:"./src/product1.html",

    }),
    new HtmlWebpackPlugin({
        filename:"product2.html",
        template:"./src/product2.html",

    }),
    new HtmlWebpackPlugin({
        filename:"product3.html",
        template:"./src/product3.html",

    }),
 
       new  MiniCssExtractPlugin({filename:"css/style.css"}),
       new OptimizeCSSAssetsPlugin({}),
   ],
};
