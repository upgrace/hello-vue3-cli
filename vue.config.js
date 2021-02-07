module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        stylusOptions: {
          module: {
            rules: [
              {
                test: /\.styl$/,
                use: [
                  {loader: "stylus-loader"},
                  {loader: "css-loader"}
                ]
              }
            ]
          }
        }
      }
    }
  }
}
