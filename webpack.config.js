module.exports = {
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        },
        {
            test: /\.(png|jpg|jpeg|PNG|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {}
              }
            ]
        },
    ]
  },
  watch: true
};