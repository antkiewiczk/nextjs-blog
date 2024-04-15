import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/app/helpers/formatDate";
import { Article } from "@/app/types/article";

interface ArticlePreviewProps {
  article: Article;
}

export const ArticlePreviewItem = ({ article }: ArticlePreviewProps) => {
  const {
    id,
    head: { headline, bannerImage, author, date },
  } = article;

  const formattedDate = date ? formatDate(date) : null;

  return (
    <article>
      <Link href={`/a/${id}`}>
        <div className="w-full h-72 relative mt-4">
          <Image
            src={bannerImage}
            alt="banner-article-image"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4">
          <h4 className="text-xl md:text-2xl leading-tight">{headline}</h4>
        </div>
        <div className="mt-4">
          <span>by {author}</span>
          {formattedDate && <span> | {formattedDate}</span>}
        </div>
      </Link>
    </article>
  );
};
