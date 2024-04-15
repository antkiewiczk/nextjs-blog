import Image from "next/image";
import React from "react";

import {
  ArticleBlock,
  ArticleBlockBreak,
  ArticleBlockImage,
  ArticleBlockQuote,
  ArticleBlockText,
} from "@/app/types/article";

function renderArticleBlock(block: ArticleBlock): JSX.Element {
  switch (block.type) {
    case "text":
      const textBlock = block as ArticleBlockText;
      return <p className="my-6">{textBlock.text}</p>;

    case "image":
      const imageBlock = block as ArticleBlockImage;
      return (
        <div className="w-full h-[20rem] md:h-[40rem] relative">
          <Image
            src={imageBlock.src}
            alt="Article Image"
            layout="fill"
            className="py-4 md:p-8 object-cover"
          />
        </div>
      );

    case "break":
      const breakBlock = block as ArticleBlockBreak;
      return (
        <div className="w-full relative bg-indigo-600 text-white grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-center items-center p-8 my-10">
          <Image
            src={breakBlock.imageSrc}
            alt="Article Image"
            width={400}
            height={400}
            objectFit="cover"
          />
          <span className="text-xl md:text-2xl">{breakBlock.text}</span>
        </div>
      );

    case "quote":
      const quoteBlock = block as ArticleBlockQuote;
      return (
        <blockquote className="text-3xl md:text-5xl italic p-4 md:p-8">
          “{quoteBlock.text}” — {quoteBlock.author}
        </blockquote>
      );

    default:
      return <></>;
  }
}

export default renderArticleBlock;
