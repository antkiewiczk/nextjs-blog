import Image from "next/image";

import { Article } from "@/app/types/article";

interface ArticlePreviewProps {
  article: Article;
}

export const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  const { id, headline, bannerImage, author } = article;

  return (
    <article>
      <div className="w-full h-64 relative mt-4">
        <Image
          src={bannerImage}
          alt="banner-article-image"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4">
        <h4 className="text-2xl">{headline}</h4>
      </div>
      <div className="mt-4">
        <span>by {author}</span>
      </div>
    </article>
  );
};
