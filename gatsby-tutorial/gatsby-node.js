const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.mediaType === "text/markdown") {
    const slug = path.basename(node.absolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
