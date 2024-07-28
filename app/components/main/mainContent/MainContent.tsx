"use client";
import { css } from "@/styled-system/css";
import Header from "@/app/common/header/Header";
import { headerHover } from "@/app/Logic/headerLogic/headerHover";
import { useEffect } from "react";

type propsType = {
  children: React.ReactNode;
};

export default function MainContent(props: propsType) {
  useEffect(() => {
    headerHover();
  }, []);

  return (
    <div className={Section}>
      <Header />
      <section className="mainContent">{props.children}</section>
    </div>
  );
}

const Section = css({
  width: "80%",
  maxWidth: "1400px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  "& header": {
    width: "100%",
  },
  "& .mainContent": {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "100px",
    columnGap: "30px",
    rowGap: "40px",
    placeItems: "center",
  },
});
