import { parsePostAbstract } from "./grayPostList";
import { parsePostDetail } from "./grayPostDetail";

// postPath를 이용해 각 mdx파일의 정보를 파싱
export function parsePost(postPath: string) {
  const listInfo = parsePostAbstract(postPath); // 각 mdx 파일의 url, category, slug 정보
  const postDetail = parsePostDetail(postPath);
  return { listInfo, postDetail };
}
