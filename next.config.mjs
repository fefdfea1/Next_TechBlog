import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // 추가적인 마크다운 플러그인 설정 가능
});

export default withMDX(nextConfig);
