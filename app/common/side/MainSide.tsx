import { css } from "@/styled-system/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function MainSide() {
  return (
    <aside className={Side}>
      <div className="search">
        <input
          type="text"
          placeholder="포스트 제목을 입력해주세요"
          id="search"
        />
        <label htmlFor="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
      </div>
      <div className={PostList}>
        <div>
          <h3>Total</h3>
          <div className="postCount">
            <span>1</span>
          </div>
        </div>
        <ul>
          <li>
            <div>
              <span>Mark Up</span>
              <div className="postCount">
                <span>1</span>
              </div>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <ul className={`${ItemList} active`}>
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
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  left: "20px",
  top: "70px",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    right: "59px",
    width: "1px",
    height: "800px",
    backgroundColor: "black",
  },

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
    alignItems: "center",
    position: "relative",

    "&::after": {
      content: "''",
      width: "74%",
      height: "1px",
      position: "absolute",
      top: "200%",
      left: "0",
      backgroundColor: "black",
    },

    "& input": {
      width: "200px",
      borderRadius: "30px",
      marginRight: "20px",
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
  padding: "0 20px",

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
    },
  },
});

const ItemList = css({
  display: "flex",
  flexDirection: "column",
  height: "0",
  overflow: "hidden",

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
