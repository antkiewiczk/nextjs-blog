import Image from "next/image";

import { fetchArticles } from "./_actions/articles-fetch-action";
import { ArticleBanner } from "./components/article-preview/article-banner";
import { ArticlePreview } from "./components/article-preview/article-preview";
import { ArticlePreviewList } from "./components/article-preview/article-preview-list";

export default async function Home() {
  const articles = await fetchArticles();
  const bannerArticle = articles[0];
  const previousArticles = articles.slice(1);

  console.log("articles", articles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <ArticleBanner article={bannerArticle} />

      <ArticlePreviewList articles={previousArticles} />

      <div className="relative flex">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        dudududu
      </div> */}
    </main>
  );
}
