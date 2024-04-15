import Image from "next/image";

import { fetchArticle } from "@/app/_actions/article-fetch-action";
import renderArticleBlock from "@/app/components/article/article-block-renderer";
import { formatDate } from "@/app/helpers/formatDate";

interface ArticleProps {
  params: { id: number };
}

export default async function Article({ params }: ArticleProps) {
  const article = await fetchArticle({ id: params.id });

  if (!article) {
    console.log("redirect to 404 here");
  }

  const {
    id,
    head: { headline, bannerImage, author, date },
  } = article;

  const formattedDate = date ? formatDate(date) : null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-8 mb-10">
      <article className="mb-8">
        <div className="w-full h-[40rem] relative">
          <Image
            src={bannerImage}
            alt="Banner for article"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-3xl md:text-5xl leading-tight mr-0 md:mr-24">
            {headline}
          </h1>
        </div>
        <div className="mt-4 mb-12">
          <span>by {author}</span>
          {formattedDate && <span> | {formattedDate}</span>}
        </div>
        <div>{article.blocks.map((block) => renderArticleBlock(block))}</div>
      </article>
    </main>
  );
}
