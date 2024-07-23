import { css } from "@/styled-system/css";

export default function MainPostCard() {
  return (
    <article className={Card}>
      <picture className="thumbnail">
        <img src="" alt="" />
      </picture>
      <div className={PostInfo}>
        <span>HTML</span>
        <h2>제목</h2>
        <p>서어어어얼명</p>
        <p>2024.07.21</p>
      </div>
    </article>
  );
}

const Card = css({
  width: "33.333%",
  maxWidth: "329px",
  height: "374px",
  boxShadow: "0 4px 13px rgba(0,0,0,0.25)",
  borderRadius: "20px",
  overflow: "hidden",

  "& .thumbnail": {
    display: "block",
    width: "100%",
    height: "176px",
    objectFit: "cover",
    border: "1px solid black",
    borderRadius: "20px 20px 0 0",
  },

  "& .thumbnail img": {
    objectFit: "cover",
  },
});

const PostInfo = css({
  maxWidth: "100%",
  padding: "0 15px",

  "& span": {
    minWidth: "50px",
    display: "inline-block",
    borderRadius: "15px",
    padding: "5px 25px",
    fontSize: "0.8125em",
    backgroundColor: "TagBg",
    color: "white",
    marginTop: "20px",
  },

  "& h2": {
    fontSize: "1.125em",
    fontWeight: 800,
    marginTop: "20px",
    color: "PostTitleColor",
  },

  "& p:nth-of-type(1)": {
    marginTop: "15px",
    color: "PostDescColor",
    fontSize: "0.8125em",
  },

  "& p:nth-of-type(2)": {
    color: "black",
    fontSize: "0.8125em",
    marginTop: "15px",
    fontWeight: "700",
  },
});
