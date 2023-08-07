import { Heading } from "./common/components"
import ArticleList from "./components/ArticleList"
import { Article } from "./types"


async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-cache",
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const articles: Article[] = await res.json()
  return articles
}

export default async function Home() {
  const articles = await getArticles()
  return (
    <div>
      <Heading as="h1" mb={4}>新着記事</Heading>
      <ArticleList articles={articles} />
    </div>
  )
}
