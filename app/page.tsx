import { css } from "@/styled-system/css";
import MainSide from "@/app/common/side/MainSide";
import MainContent from "@/app/components/main/mainContent/MainContent";
import MainPostCard from "@/app/components/main/PostCard/MainPostCard";
import { getPostPaths } from "@/app/Logic/grayMatterLogic/getPostPaths";
import { parsePost } from "@/app/Logic/grayMatterLogic/gray";
import { nanoid } from "nanoid";

export default function Home() {
  const PostArray = getPostPaths();

  return (
    <main className={`${Main} main`}>
      <MainSide />
      <MainContent>
        {PostArray.map((item) => {
          const PostData = parsePost(item);
          return (
            <MainPostCard
              title={PostData.postDetail.title}
              Desc={PostData.postDetail.content}
              Date={PostData.postDetail.date}
              tag={PostData.postDetail.Tag}
              key={nanoid()}
              id={"1"}
            />
          );
        })}
      </MainContent>
    </main>
  );
}

const Main = css({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  padding: "50px 30px 0 30px",
  marginLeft: "20%",
});
