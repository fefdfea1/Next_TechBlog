import { sync } from "glob";
import path from "path";
const BASE_PATH = "/app/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPaths = (
  category?: string,
  folderName?: string,
  fileName?: string
) => {
  const categoryFolder = category || "**";
  const folder = folderName || "**";
  const Name = fileName || "**";
  const paths: string[] = sync(
    `${POSTS_PATH}/${categoryFolder}/${folder}/${Name}.mdx`
  );
  return paths;
};
