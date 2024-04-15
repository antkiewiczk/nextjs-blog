import { fetchArticle } from "@/app/_actions/article-fetch-action";

export default async function Article({ params }: { params: { id: number } }) {
  const article = await fetchArticle({ id: params.id });

  if (!article) {
    console.log("nie ma");
  }

  return (
    <>
      {article.author}
      <h1>My Page</h1>
    </>
  );
}
