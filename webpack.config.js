const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|jpg|jpeg|png)/ig,
                type: "asset/resource"
            },
        ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist")
    },
}