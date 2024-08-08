import { css } from "@/styled-system/css";
import { MDXRemote } from "next-mdx-remote/rsc";
import style from "@/public/css/MainpostCard/post.module.css";
import Link from "next/link";

type propsType = {
  title: string;
  desc: string;
  date: string;
  tag: string;
  url: string;
  thumbnail: string;
};

export default function MainPostCard(props: propsType) {
  const descString = props.desc.slice(0, 150);
  console.log(props.url);
  return (
    <article className={Card}>
      <Link href={`/detail/${props.url}`}>
        <picture className="thumbnail">
          <img src={props.thumbnail} alt={"이미지"} />
        </picture>
        <div className={PostInfo}>
          <span>{props.tag}</span>
          <h2 className={`${style.Desc}`}>{props.title}</h2>
          <div className={`${style.Desc}`}>
            <MDXRemote source={descString} />
          </div>

          <p>{props.date}</p>
        </div>
      </Link>
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
  "& > a": {
    width: "100%",
    height: "100%",
    display: "block",
  },

  "& .thumbnail": {
    width: "100%",
    height: "176px",
    display: "block",
    position: "relative",
    objectFit: "cover",
    borderBottom: "1px solid black",
    borderRadius: "20px 20px 0 0",
  },

  "& .thumbnail img": {
    width: "100%",
    height: "100%",
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
