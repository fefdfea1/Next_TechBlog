import Language from "@/app/components/hoverModal/category/Language";
import Library from "@/app/components/hoverModal/category/Library";
import MarkUp from "@/app/components/hoverModal/category/MarkUp";
import TeamProject from "@/app/components/hoverModal/category/TeamProject";
import { css } from "@/styled-system/css";
import StyleSheet from "@/app/components/hoverModal/category/StyleSheet";
import Error from "@/app/components/hoverModal/category/Error";
import FrameWork from "@/app/components/hoverModal/category/FrameWork";

export default function DevCategory() {
  return (
    <section className={`${HoverModalStyle} DevCategory`}>
      <MarkUp />
      <Language />
      <TeamProject />
      <Library />
      <StyleSheet />
      <Error />
      <FrameWork />
    </section>
  );
}

const HoverModalStyle = css({
  width: "100%",
  position: "absolute",
  top: "100%",
  left: "0",
  backgroundColor: "HoverModalBg",
  display: "none",
  gridTemplateColumns: "repeat(3, 1fr)",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 2px 9px rgba(0,0,0,0.25)",

  "&.active": {
    display: "grid",
  },

  "& > div": {
    display: "flex",
    flexDirection: "column",
  },

  "& > div > span": {
    fontSize: "14px",
    color: "#999",
    fontWeight: "600",
    marginTop: "10px",

    _hover: {
      color: "ActiveColor",
      transition: "0.5s",
    },
  },

  "& > div > span:first-of-type": {
    marginTop: "10px",
  },

  "& > div > span:last-of-type": {
    marginBottom: "30px",
  },

  "& .hoverModalCategory": {
    color: "Primary",
    fontSize: "17px",
    fontWeight: "800",
    cursor: "auto",
    pointerEvents: "none",
  },

  "& .hoverModalCategory ~ span svg": {
    width: "15px",
    marginLeft: "0",
    marginRight: "8px",
  },
});
