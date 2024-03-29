module.exports = {
  siteMetadata: {
    title: "Full Stack Bootcamp!",
    author: "Kevin Guertin",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
