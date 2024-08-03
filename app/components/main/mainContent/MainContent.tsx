"use client";
import { css } from "@/styled-system/css";
import Header from "@/app/common/header/Header";

type propsType = {
  children: React.ReactNode;
};

export default function MainContent(props: propsType) {
  return (
    <div className={`${Section} hoverEvent`}>
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
  padding: "10px 10px",

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
