module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
      "/dog": {
        target: "https://dog.ceo/api/breeds/image/random",
      },
    },
  },
};
