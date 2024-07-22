export function parsePostAbstract(postPath: string) {
  const change = postPath.replace(/\\/g, "/");
  if (process.env.BASE_PATH) {
    const filePath = change // base path를 제거하여 카테고리와 파일 이름만을 남겨서 분리 할 수 있도록 함
      .slice(change.indexOf(process.env.BASE_PATH))
      .replace(`${process.env.BASE_PATH}/`, "")
      .replace(".mdx", "");
    const [category, slug] = filePath.split("/"); // 카테고리와 파일 이름 분리
    if (slug !== undefined) {
      const url = `/posts/${category}/${slug}`; // 모든 값이 있으니 category , slug 모두 return
      return { url, category, slug };
    } else {
      const url = `/posts/${category}`;
      return { url, category }; // slug는 값이 없으니 category만을 return
    }
  } else {
    return "목록을 불러오는중 오류가 발생 했습니다.";
  }
}
