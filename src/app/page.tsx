import { fetchArticles } from "./_actions/articles-fetch-action";
import { ArticlePreviewBanner } from "./components/article-preview/article-preview-banner";
import { ArticlePreviewList } from "./components/article-preview/article-preview-list";

export default async function Home() {
  const articles = await fetchArticles();
  const bannerArticle = articles[0];
  const previousArticles = articles.slice(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-8 mb-10">
      <ArticlePreviewBanner article={bannerArticle} />

      <ArticlePreviewList articles={previousArticles} />
    </main>
  );
}
