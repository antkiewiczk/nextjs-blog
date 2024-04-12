import Image from "next/image";

import { Article } from "@/app/types/article";

import { ArticlePreview } from "./article-preview";

interface ArticlePreviewListProps {
  articles: Article[];
}

export const ArticlePreviewList = ({ articles }: ArticlePreviewListProps) => (
  <div className="grid grid-cols-2 gap-6">
    {articles.map((article) => (
      <ArticlePreview article={article} key={article.id} />
    ))}
  </div>
)