import { Heading } from "./common/components"
import ArticleList from "./components/ArticleList"
import { Article } from "./types"


// async function getArticles() {
//   const res = await fetch("https://next13-traning.vercel.app/api/articles", {
//     cache: "no-cache",
//   })

//   if (!res.ok) {
//     throw new Error(res.statusText)
//   }

//   const articles: Article[] = await res.json()
//   return articles
// }

export default async function Home() {
  // const articles = await getArticles()
  const articles = [
    {
      id: 1,
      title: "新宿区の魅力",
      slug: "shinjuku-district",
      content: "新宿区は、東京都の中心に位置するエリアで、ビジネスとエンターテイメントが融合した活気ある街です。新宿駅は世界一の利用者数を誇り、ショッピングモール、レストラン、バーなどが集まるスポットとして知られています。歌舞伎町では、夜のエンターテイメントを楽しむことができます。",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
    },
    {
      id: 2,
      title: "渋谷区の観光名所",
      slug: "shibuya-district",
      content: "渋谷区は、若者文化の発信地として国際的に有名です。渋谷の交差点は、世界でも最も人々が行き交う場所の一つで、そのダイナミックな風景は観光名所となっています。渋谷ヒカリエや渋谷ストリームなどの新しいランドマークも登場し、ショッピングやグルメ、アートの楽しめる街として進化を続けています。",
      createdAt: "2021-01-02",
      updatedAt: "2021-01-02",
    },
  ]

  return (
    <div>
      <Heading as="h1" mb={4}>新着記事</Heading>
      <ArticleList articles={articles} />
    </div>
  )
}
