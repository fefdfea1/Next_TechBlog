import Header from "@/app/common/header/Header";
import { css } from "@/styled-system/css";
import MainSide from "@/app/components/main/side/MainSide";
import MainContent from "@/app/components/main/mainContent/MainContent";
export default function Home() {
  return (
    <main className={Main}>
      <MainSide />
      <MainContent>
        <Header />
      </MainContent>
    </main>
  );
}

const Main = css({
  backgroundColor: "MainBg",
  height: "100vh",
  display: "flex",
  padding: "50px 30px 0 30px",
});
