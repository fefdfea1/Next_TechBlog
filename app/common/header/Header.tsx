"use client";
import { css } from "@/styled-system/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DevOpsCategory from "./../../components/hoverModal/DevOpsCategory";
import DevCategory from "@/app/components/hoverModal/DevCategory";
import { useRef, useState } from "react";

export default function Header() {
  const [DevModalState, setDevState] = useState(false);
  const [DevOpsState, steDevOpsState] = useState(false);
  const DevRef = useRef<HTMLSpanElement>(null);
  const DevOpsRef = useRef<HTMLSpanElement>(null);
  return (
    <header className={`${HeaderStyle} header`}>
      <span className="headerItem modalActiveItem Dev" ref={DevRef}>
        Dev
        <FontAwesomeIcon icon={faArrowDown} />
        {DevModalState && <DevCategory />}
      </span>
      <span className="headerItem modalActiveItem DevOps" ref={DevOpsRef}>
        DevOps
        <FontAwesomeIcon icon={faArrowDown} />
        {DevOpsState && <DevOpsCategory />}
      </span>
      <span className={`titleLogo`}>
        <Link href={"/"}>fefdfea's Develop</Link>
      </span>
      <span className="headerItem">전체글</span>
      <span className="headerItem">방명록</span>
    </header>
  );
}

const HeaderStyle = css({
  width: "90%",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "space-around",
  borderRadius: "30px",
  boxShadow: "0 2px 9px rgba(0,0,0,0.25)",
  position: "relative",

  "& .headerItem": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "Primary",
    fontSize: "1.4375em",
    cursor: "pointer",
    padding: "20px 0",

    "& svg": {
      width: "20px",
      height: "20px",
      marginLeft: "5px",
      pointerEvents: "none",
    },
  },

  "& .titleLogo": {
    color: "HeaderTitleColor",
    fontSize: "1.625em",
    fontFamily: "var(--indie-font)",
    padding: "20px 0",
  },
});
