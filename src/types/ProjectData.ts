import { TAGS } from "./Tags";

export type ProjectData = {
  title: string;
  img?: string;
  href?: string;
  description: string;
  tags: (keyof typeof TAGS)[];
};
