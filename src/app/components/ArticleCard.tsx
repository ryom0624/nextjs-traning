import  NextLink from "next/link"
import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "../common/components"
import { Article } from "../types"


export default function ArticleCard({article}: {article: Article}) {
  const formattedDate = new Date(article.createdAt).toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Card
      boxShadow={"md"}
    >
      <NextLink href={`/articles/${article.slug}`}>
        <CardHeader>
          <Heading as="h2" size="md">{article.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{article.content.substring(0,200)}...</Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="sm" color="gray.600">{formattedDate}</Text>
        </CardFooter>
      </NextLink>
    </Card>
  )

}
