"use client";
import { css } from "@/styled-system/css";
import Header from "@/app/common/header/Header";
import { ReactNode, useEffect } from "react";
import { headerHover } from "@/app/Logic/headerLogic/headerHover";

type propsType = {
  children: ReactNode;
};

export default function page(props: propsType) {
  useEffect(() => {
    headerHover();
  }, []);
  return (
    <div className={DetailContainer}>
      <Header />

      <section className={Detail}>{props.children}</section>
    </div>
  );
}

const DetailContainer = css({
  minWidth: "100%",
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
