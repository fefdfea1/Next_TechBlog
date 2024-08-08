"use client";
import { css } from "@/styled-system/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { sidebarActive } from "@/app/Logic/mainSideLogic/SideLogic";
export default function MainSide() {
  return (
    <aside className={Side} onClick={sidebarActive}>
      <div className="search">
        <input
          type="text"
          placeholder="포스트 제목을 입력해주세요"
          id="search"
        />
      </div>
      <div className={PostList}>
        <div>
          <h3>Total</h3>
          <div className="postCount">
            <span>1</span>
          </div>
        </div>
        <ul>
          <li className="sideActiveItem">
            <div>
              <span>Mark Up</span>
              <div className="postCount">
                <span>1</span>
              </div>

              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <ul className={`${ItemList}`}>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />
                <span>HTML</span>
                <div className="postCount">
                  <span>1</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}

const Side = css({
  width: "19%",
  maxWidth: "272px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  left: "0px",
  top: "0px",
  border: "1px solid black",

  "& > div .postCount": {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "40px",
    height: "23px",
    border: "1px solid black",
    borderRadius: "30px",
    textAlign: "center",
    marginLeft: "10px",
    color: "#999",
    fontSize: "1.125rem",
    fontWeight: "400",
  },

  "& .search": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "50px",

    "&::after": {
      content: "''",
      width: "100%",
      height: "1px",
      position: "absolute",
      top: "187%",
      left: "0",
      backgroundColor: "black",
    },

    "& input": {
      width: "80%",
      borderRadius: "30px",
      padding: "17px 20px",
      fontSize: "0.875em",
      backgroundColor: "searchBg",
      boxShadow: "0 5px 4px rgba(0,0,0,0.2)",

      _placeholder: {
        fontSize: "0.875em",
        color: "placeHolder",
      },
    },

    "& > label > svg": {
      width: "40px !important",
      height: "40px !important",
    },
  },
});

const PostList = css({
  marginTop: "82px",
  overflow: "auto",
  minHeight: "200px",
  padding: "0 30px",

  "& > div": {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

  "& h3": {
    fontSize: "1.875em",
    fontWeight: "800",
    display: "inline-block",
  },

  "& > ul": {
    marginTop: "30px",
    fontSize: "1.4375em",
    color: "Primary",
    padding: "0 0 20px 0",

    "& > li > div": {
      display: "flex",
      alignItems: "center",
      fontWeight: "800",
      cursor: "pointer",
    },

    "& > li > div > svg": {
      width: "30px !important",
      height: "30px !important",
      marginLeft: "20px !important",
      transform: "rotate(-90deg)",
      transition: "all 0.2s",
    },

    "& > li.active > div > svg": {
      transform: "rotate(0deg)",
    },
  },
  "& li.active ul": {
    height: "auto",
  },
});

const ItemList = css({
  display: "flex",
  flexDirection: "column",
  height: "0px",
  overflow: "hidden",
  transition: "height 0.2s",

  "&.active": {
    height: "auto",
  },

  "& svg": {
    width: "10px",
    height: "10px",
    marginRight: "10px",
  },

  "& li": {
    fontSize: "0.8em",
    fontWeight: "700",
    color: "#999",
    display: "inline-flex",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "20px",
    cursor: "pointer",
  },
});
