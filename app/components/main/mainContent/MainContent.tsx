import { css } from "@/styled-system/css";
import Header from "@/app/common/header/Header";

type propsType = {
  children: React.ReactNode;
};

export default function MainContent(props: propsType) {
  return (
    <div className={Section}>
      <Header />
      <section>{props.children}</section>
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
  "& section": {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "100px",
    columnGap: "30px",
    rowGap: "40px",
    placeItems: "center",
  },
});
