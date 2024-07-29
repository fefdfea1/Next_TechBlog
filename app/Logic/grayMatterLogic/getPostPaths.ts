import { sync } from "glob";
import path from "path";
const BASE_PATH = "/app/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = (category?: string, folderName?: string) => {
  const folder = category || "**";
  const Name = folderName || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/${Name}.mdx`);
  return paths;
};
