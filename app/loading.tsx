import { css } from "@/styled-system/css";
import Image from "next/image";
import img from "../public/img/loading.gif";
export default function Loading() {
  return (
    <div className={GlobalLoading}>
      <Image src={img} alt="로딩" width={200} height={200} />
    </div>
  );
}

const GlobalLoading = css({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "LoadingBg",
});
