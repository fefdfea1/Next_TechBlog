import { css } from "@/styled-system/css";

type propsType = {
  Title: string;
};

export default function Title(props: propsType) {
  return (
    <div className={TitleStyle}>
      <h2>
        <span>{props.Title}</span>
      </h2>
    </div>
  );
}

const TitleStyle = css({
  position: "relative",
  fontSize: "2.5em",
  fontWeight: "800",
  _after: {
    content: "''",
    width: "100%",
    height: "6px",
    position: "absolute",
    left: "0",
    bottom: "0",
    borderRadius: "20px",
    backgroundColor: "#D9D9D9",
  },

  "& span": {
    position: "relative",
    display: "inline-block",
    height: "100%",

    _before: {
      content: "''",
      width: "100%",
      height: "6px",
      position: "absolute",
      left: "0",
      bottom: "0",
      borderRadius: "20px",
      backgroundColor: "Primary",
      zIndex: "1",
    },
  },
});
