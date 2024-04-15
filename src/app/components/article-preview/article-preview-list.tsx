import Image from "next/image";

import { Article } from "@/app/types/article";

import { ArticlePreviewItem } from "./article-preview-item";

interface ArticlePreviewListProps {
  articles: Article[];
}

export const ArticlePreviewList = ({ articles }: ArticlePreviewListProps) => (
  <div className="grid md:grid-cols-2 gap-6">
    {articles.map((article) => (
      <ArticlePreviewItem article={article} key={article.id} />
    ))}
  </div>
)