import { VStack } from "../common/components"
import { Article } from "../types"
import ArticleCard from "./ArticleCard"


export default async function ArticleList({ articles }: { articles : Article[]}) {
  return (
    <VStack spacing={4} as="ul">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </VStack>
  )
}
