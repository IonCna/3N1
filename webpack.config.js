const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

/**
 *  @type { import("webpack").Configuration }
 */

const config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        extensions: ["*", ".jsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use : "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader" ]
            }
        ]
    },

    plugins: [ new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html"
    })]
}

module.exports = config