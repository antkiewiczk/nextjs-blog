import Image from "next/image";

import { Article } from "@/app/types/article";

interface ArticleBannerProps {
  article: Article;
}

export const ArticleBanner = ({ article }: ArticleBannerProps) => {
  const { id, headline, bannerImage, author } = article;

  return (
    <article className="mb-8">
      <div className="w-full h-[40rem] relative">
        <Image
          src={bannerImage}
          alt="banner-article-image"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-5xl">{headline}</h1>
      </div>
      <div className="mt-4">
        <span>by {author}</span>
      </div>
    </article>
  );
};
