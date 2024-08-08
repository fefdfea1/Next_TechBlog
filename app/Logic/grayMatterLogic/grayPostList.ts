export function parsePostAbstract(postPath: string) {
  const change = postPath.replace(/\\/g, "/");
  if (process.env.BASE_PATH) {
    const filePath = change // base path를 제거하여 카테고리와 파일 이름만을 남겨서 분리 할 수 있도록 함
      .slice(change.indexOf(process.env.BASE_PATH))
      .replace(`${process.env.BASE_PATH}/`, "")
      .replace(".mdx", "");
    const [category, slug, fileName] = filePath.split("/"); // 카테고리와 파일 이름 분리
    const url = `/posts/${category}/${slug}/${fileName}`; // 모든 값이 있으니 category , slug 모두 return
    return { url };
  }
}
