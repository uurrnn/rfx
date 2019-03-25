const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: "./src/index.html" })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceMaps: true,
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            [
                                "@babel/plugin-transform-react-jsx",
                                { pragma: "h" }
                            ]
                        ]
                    }
                }
            },
            {
                // apparently have to load all these in this specific order in this order for sass and bootstrap to work
                // havent tested taking things out yet
                test: /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [
                                    require("precss"),
                                    require("autoprefixer")
                                ];
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};
