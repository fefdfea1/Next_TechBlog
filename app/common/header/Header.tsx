import { css } from "@/styled-system/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Indie } from "@/app/layout";
import Link from "next/link";

export default function Header() {
  return (
    <header className={HeaderStyle}>
      <span>
        Dev
        <FontAwesomeIcon icon={faArrowDown} />
      </span>
      <span>
        DevOps
        <FontAwesomeIcon icon={faArrowDown} />
      </span>
      <span className={`titleLogo ${Indie.className}`}>
        <Link href={"/"}>fefdfea's Develop</Link>
      </span>
      <span>전체글</span>
      <span>방명록</span>
    </header>
  );
}

const HeaderStyle = css({
  width: "90%",
  maxWidth: "1200px",

  display: "flex",
  justifyContent: "space-around",
  borderRadius: "30px",
  border: "1px solid black",
  padding: "20px 20px",

  "& .titleLogo": {
    color: "HeaderTitleColor",
    fontSize: "1.625em",
  },

  "& span": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "Primary",
    fontSize: "1.4375em",
    cursor: "pointer",

    "& svg": {
      width: "20px",
      height: "20px",
      marginLeft: "5px",
    },
  },
});
