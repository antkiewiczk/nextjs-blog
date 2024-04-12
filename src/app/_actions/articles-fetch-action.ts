"use server";

import articleList from "../data/article-list.json";
import { Article } from "../types/article";

export async function fetchArticles(): Promise<Article[]> {
  return articleList;
}
