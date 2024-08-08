import { css } from "@/styled-system/css";
import MainSide from "@/app/common/side/MainSide";
import MainContent from "@/app/components/main/mainContent/MainContent";
import MainPostCard from "@/app/components/main/PostCard/MainPostCard";
import { getPostPaths } from "@/app/Logic/grayMatterLogic/getPostPaths";
import { parsePost } from "@/app/Logic/grayMatterLogic/gray";
import { nanoid } from "nanoid";

export default function MainPage() {
  const PostArray = getPostPaths();

  return (
    <main className={`${Main} main`}>
      <MainSide />
      <MainContent>
        {PostArray.map((item) => {
          const PostData = parsePost(item);

          if (PostData.listInfo && PostData.postDetail) {
            return (
              <MainPostCard
                title={PostData.postDetail.data.title}
                desc={PostData.postDetail.content}
                date={PostData.postDetail.data.date}
                tag={PostData.postDetail.data.tag}
                url={PostData.listInfo.url}
                thumbnail={PostData.postDetail.data.thumbnail}
                key={nanoid()}
              />
            );
          } else {
            return "정보를 불러오는데 실패했습니다.";
          }
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
