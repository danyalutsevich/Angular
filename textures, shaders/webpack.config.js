const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

console.log(process.env.NODE_ENV);

module.exports = {
    entry: {
        main: './main.js',
    },
    output: {
        filename: '[name]_[contenthash]_bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 3000
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
        minimizer: [new CssMinimizerPlugin],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'style.css'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'img', 'earthUV.jpg'),
                    to: path.resolve(__dirname, 'dist', 'img', 'earthUV.jpg')
                },
                {
                    from: path.resolve(__dirname, 'shaders', 'vertex.glsl'),
                    to: path.resolve(__dirname, 'dist', 'shaders', '[name][ext]')
                },
                {
                    from: path.resolve(__dirname, 'shaders', 'fragment.glsl'),
                    to: path.resolve(__dirname, 'dist', 'shaders', '[name][ext]')
                },
                {
                    from: path.resolve(__dirname, 'shaders', 'ATMOfragment.glsl'),
                    to: path.resolve(__dirname, 'dist', 'shaders', '[name][ext]')
                },
                {
                    from: path.resolve(__dirname, 'shaders', 'ATMOvertex.glsl'),
                    to: path.resolve(__dirname, 'dist', 'shaders', '[name][ext]')
                },
            ]
        }),
        new MiniCssExtractPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.glsl$/i,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg|ttf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};