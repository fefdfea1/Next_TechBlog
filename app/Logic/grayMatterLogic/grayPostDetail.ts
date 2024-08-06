import fs from "fs";
import matter from "gray-matter";

type contentType = {
  title: string;
  data: string;
  date: string;
  tag: string;
  thumbnail: string;
  reference: string[];
};

export function parsePostDetail(postPath: string) {
  const readingFile = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(readingFile);
  const grayMatter = data as contentType;
  console.log(grayMatter);
  return { ...grayMatter, data, content };
}
