import React from "react";
import { css } from "@/styled-system/css";

type propsType = {
  referenceArray: string[];
};

export default function Reference(props: propsType) {
  return (
    <article className={ReferenceStyle}>
      <p>참고 사이트</p>
      <ul>
        {props.referenceArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </article>
  );
}

const ReferenceStyle = css({
  width: "100%",
  marginTop: "200px",
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
    width: "calc(100% + 2px)",
    borderRadius: "10px",
    backgroundColor: "ReferenceUlBg",
    border: "1px solid #999",
    marginLeft: "-1px",
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
