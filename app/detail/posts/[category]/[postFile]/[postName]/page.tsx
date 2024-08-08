import { css } from "@/styled-system/css";
import Header from "@/app/common/header/Header";
import { MDXRemote } from "next-mdx-remote/rsc";
import { parsePostDetail } from "@/app/Logic/grayMatterLogic/grayPostDetail";
import { getPostPaths } from "@/app/Logic/grayMatterLogic/getPostPaths";
import Title from "@/app/components/detail/Title";
import rehypeHighlight from "rehype-highlight";
import Reference from "@/app/components/detail/Reference";

type urlType = {
  params: {
    [keys: string]: string;
  };
  searchParams: {
    [keys: string]: string;
  };
};

type paramsType = {
  [keys: string]: {
    [keys: string]: string;
  };
};

export default function DetailPage(url: urlType) {
  const { params }: paramsType = url;
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
      <Title Title={detail.data.title} />
      <section className={Detail}>
        <MDXRemote source={detail.content} options={options} />
      </section>
      {detail.data.reference && (
        <Reference referenceArray={detail.data.reference} />
      )}
    </div>
  );
}

const DetailContainer = css({
  position: "relative",
  maxWidth: "1200px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "60px 0",
  margin: "0 auto",
});

const Detail = css({
  width: "100%",
  maxWidth: "985px",
  marginTop: "60px",
  wordBreak: "break-all",
});
