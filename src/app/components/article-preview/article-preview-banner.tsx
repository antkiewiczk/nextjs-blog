import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/app/helpers/formatDate";
import { Article } from "@/app/types/article";

interface ArticleBannerProps {
  article: Article;
}

export function ArticlePreviewBanner({ article }: ArticleBannerProps) {
  const { id, headline, bannerImage, author, date } = article;

  const formattedDate = date ? formatDate(date) : null;

  return (
    <article className="mb-8">
      <Link href={`/a/${id}`} passHref>
        <div className="w-full h-[40rem] relative">
          <Image
            src={bannerImage}
            alt="Banner for article"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-5xl leading-tight mr-0 md:mr-24">{headline}</h1>
        </div>
        <div className="mt-4">
          <span>by {author}</span>
          {formattedDate && <span> | {formattedDate}</span>}
        </div>
      </Link>
    </article>
  );
}
