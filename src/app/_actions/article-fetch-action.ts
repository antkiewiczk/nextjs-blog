"use server";

import { Article } from "../types/article";

interface ErrorInfo {
  error: boolean;
  message: string;
}

export async function fetchArticle({
  id,
}: {
  id: number;
}): Promise<Article | ErrorInfo> {
  try {
    const data = await import(`../data/${id}.json`);
    return data.default;
  } catch (error: any) {
    if (error.message.includes("Cannot find module")) {
      return { error: true, message: `Article with ID ${id} not found.` };
    } else {
      return {
        error: true,
        message: "Failed to fetch article: " + error.message,
      };
    }
  }
}
