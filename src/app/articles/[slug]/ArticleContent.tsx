import { Card, CardBody, CardHeader, CardFooter, Heading, Text } from "../../common/components";
import { Article } from "../../types";

export default function ArticleContent({article} : {article : Article}) {
  return (
    <Card>
      <CardHeader>
        <Heading as="h2" size="lg">
          {article.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{article.content}</Text>
      </CardBody>
      <CardFooter>
        <Text fontSize="sm" color="gray.600">{article.createdAt}</Text>
      </CardFooter>
    </Card>
  )
}
