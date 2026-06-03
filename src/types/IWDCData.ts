import { WCCTAGS } from "./WCCTags";

export type IWDCData = {
  title: string;
  img?: string;
  href?: string;
  description: string;
  tags: (keyof typeof WCCTAGS)[];
};
