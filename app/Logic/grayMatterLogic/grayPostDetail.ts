import fs from "fs";
import matter from "gray-matter";

export function parsePostDetail(postPath: string) {
  const readingFile = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(readingFile);
  return { data, content };
}
