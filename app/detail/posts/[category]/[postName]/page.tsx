import { css } from "@/styled-system/css";
import Header from "@/app/common/header/Header";
import { MDXRemote } from "next-mdx-remote/rsc";
import { parsePostDetail } from "@/app/Logic/grayMatterLogic/grayPostDetail";
import { getPostPaths } from "@/app/Logic/grayMatterLogic/getPostPaths";
import rehypeHighlight from "rehype-highlight";

type params = {
  category: string;
  postName: string;
};

export default function DetailPage(params: params) {
  const path = getPostPaths(params.category, params.postName);
  const detail = parsePostDetail(path[0]);

  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <div className={DetailContainer}>
      <Header />
      <section className={Detail}>
        <MDXRemote source={detail.content} options={options} />
      </section>
    </div>
  );
}

const DetailContainer = css({
  minWidth: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "60px 0",
});

const Detail = css({
  width: "100%",
  maxWidth: "1000px",
  marginTop: "60px",
});
