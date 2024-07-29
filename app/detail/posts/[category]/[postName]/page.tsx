// "use client";
import { css } from "@/styled-system/css";
import Header from "@/app/common/header/Header";
import { headerHover } from "@/app/Logic/headerLogic/headerHover";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useEffect } from "react";
import { removeHover } from "@/app/Logic/headerLogic/headerHover";
import { parsePostDetail } from "@/app/Logic/grayMatterLogic/grayPostDetail";
import { getPostPaths } from "@/app/Logic/grayMatterLogic/getPostPaths";

type params = {
  category: string;
  postName: string;
};

export default function DetailPage(params: params) {
  // useEffect(() => {
  //   headerHover();

  //   return () => removeHover();
  // }, []);
  const path = getPostPaths(params.category, params.postName);
  const detail = parsePostDetail(path[0]);

  return (
    <div className={DetailContainer}>
      <Header />
      <section className={Detail}>
        <MDXRemote source={detail.content} />
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
