export interface ArticleHead {
  headline: string;
  bannerImage: string;
  author: string;
  date?: string;
}

export type ArticleBlockType = "text" | "image" | "break" | "quote";

export interface ArticleBlock {
  type: ArticleBlockType;
}

export interface ArticleBlockText extends ArticleBlock {
  type: "text";
  text: string;
}

export interface ArticleBlockImage extends ArticleBlock {
  type: "image";
  src: string;
}

export interface ArticleBlockBreak extends ArticleBlock {
  type: "break";
  imageSrc: "string";
  text: string;
}

export interface ArticleBlockQuote extends ArticleBlock {
  type: "quote";
  text: string;
  author: string;
}

export interface Article {
  id: number;
  head: ArticleHead;
  blocks?: (
    | ArticleBlockText
    | ArticleBlockImage
    | ArticleBlockBreak
    | ArticleBlockQuote
  )[];
}
