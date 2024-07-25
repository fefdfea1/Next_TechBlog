import { css } from "@/styled-system/css";
import { MDXRemote } from "next-mdx-remote/rsc";
import style from "@/public/css/MainpostCard/post.module.css";

type propsType = {
  title: string;
  Desc: string;
  Date: string;
  tag: string;
};

export default function MainPostCard(props: propsType) {
  return (
    <article className={Card}>
      <a href="#">
        <picture className="thumbnail">
          <img src="" alt="" />
        </picture>
        <div className={PostInfo}>
          <span>{props.tag}</span>
          <h2>{props.title}</h2>
          <div className={`${style.Desc}`}>
            <MDXRemote source={props.Desc} />
          </div>

          <p>{props.Date}</p>
        </div>
      </a>
    </article>
  );
}

const Card = css({
  width: "100%",
  maxWidth: "320px",
  height: "374px",
  boxShadow: "0 4px 13px rgba(0,0,0,0.25)",
  borderRadius: "20px",
  overflow: "hidden",

  "& .thumbnail": {
    display: "block",
    width: "100%",
    height: "176px",
    objectFit: "cover",
    borderBottom: "1px solid black",
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
    padding: "2px 14px",
    fontSize: "0.8125em",
    backgroundColor: "TagBg",
    color: "white",
    marginTop: "20px",
  },

  "& h2": {
    fontSize: "0.875em",
    fontWeight: 800,
    marginTop: "10px",
    color: "PostTitleColor",
  },

  "& div": {
    width: "100%",
    marginTop: "10px",
    color: "PostDescColor",
    fontSize: "0.8125em",
  },

  "& p": {
    color: "black",
    fontSize: "0.8125em",
    marginTop: "14px",
    fontWeight: "700",
  },
});
