import createMDX from "@next/mdx";
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from 'rehype-prism'

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options:{
    remarkPlugins:[remarkGfm],
    rehypePlugins:[rehypeAutolinkHeadings,rehypePrism]
  }
});

export default withMDX(nextConfig);
