import { css } from "@/styled-system/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
      <div></div>
    </aside>
  );
}

const Side = css({
  width: "20%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  position: "relative",

  _before: {
    content: "asdas",
  },

  "& .search": {
    display: "flex",
    _after: {
      content: "asdasdasdasd",
    },

    "& input": {
      width: "200px",
      borderRadius: "30px",
      border: "1px solid black",
      marginRight: "20px",
      padding: "5px 10px",
      fontSize: "0.875em",

      _placeholder: {
        fontSize: "0.875em",
      },
    },

    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
});
