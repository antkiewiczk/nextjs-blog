"use server";

import { Article } from "../types/article";

export async function fetchArticle({ id }: { id: number }): Promise<Article> {
  try {
    const data = await import(`../data/${id}.json`);
    return data.default;
  } catch (error: any) {
    console.log("error", error);
    // Check if the error is due to the file not being found or some other reason
    if (error.message.includes("Cannot find module")) {
      // return {error: true, message: `Article with ID ${id} not found.`}
      throw new Error(`Article with ID ${id} not found.`);
    } else {
      throw new Error("Failed to fetch article: " + error.message);
    }
  }
}
