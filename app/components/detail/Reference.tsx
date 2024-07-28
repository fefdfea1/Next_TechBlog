import React from "react";
import { css } from "@/styled-system/css";

export default function Reference() {
  return (
    <article className={ReferenceStyle}>
      <p>참고 사이트</p>
      <ul>
        <li>https://www.naver.com/</li>
      </ul>
    </article>
  );
}

const ReferenceStyle = css({
  width: "100%",
  borderRadius: "20px",
  backgroundColor: "Primary",
  color: "ReferenceBg",
  border: "1px solid #999",
  borderBottom: "0",

  "& p": {
    padding: "4px 31px",
    fontSize: "1.375em",
  },
  "& ul": {
    width: "100%",
    borderRadius: "10px",
    backgroundColor: "ReferenceUlBg",
    border: "1px solid #999",
  },
  "& ul li": {
    position: "relative",
    color: "ReferenceListColor",
    padding: "14px 31px",
    fontSize: "0.875em",

    _after: {
      content: "''",
      width: "100%",
      height: "1px",
      backgroundColor: "#999",
      position: "absolute",
      bottom: "0",
      left: "0",
    },
  },

  "& ul li:last-of-type": {
    _after: {
      content: "",
      backgroundColor: "transparent",
    },
  },
});
