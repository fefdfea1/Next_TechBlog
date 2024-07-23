import { css } from "@/styled-system/css";

type propsType = {
  children: React.ReactNode;
};

export default function MainContent(props: propsType) {
  return <section className={Section}>{props.children}</section>;
}

const Section = css({
  width: "70%",
  maxWidth: "1400px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginLeft: "70px",
});
