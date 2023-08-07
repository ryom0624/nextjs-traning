import notFound from './not-found'
import { Article, Comment } from '../../types'
import { Suspense } from 'react';
import ArticleContent from './ArticleContent'
import Comments from './Comments';
import { Heading } from '../../common/components'
import LoadingComments from './LoadingComments'

const getArticle = async(slug: string) => {
  const res = await fetch(`https://nextjs13-traning.vercel.app/api/articles/${slug}`, {
    next: { 'revalidate': 60 },
  })

  if(res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("記事の取得に失敗しました。")
    // throw new Error(res.statusText)
  }
  const data = await res.json() as Article
  return data as Article

}

const getComments = async(slug: string) => {
    const res = await fetch(`https://nextjs13-traning.vercel.app/api/articles/${slug}/comments`, {
      cache: 'no-cache',
    })

    if (!res.ok) {
      throw new Error("コメントの取得に失敗しました。")
      // throw new Error(res.statusText)
    }
    const data = await res.json() as Comment[]
    return data as Comment[]
}

export default async function ArticlesDetail({params}:  {params: {slug: string}}) {
  const articlePromise = getArticle(params.slug);
  const commentsPromise = getComments(params.slug);
  const article = await articlePromise;

  return (
    <div>
      <ArticleContent article={article}/>
      <Heading as="h2" size="lg" py={4} mb={4}>Comments</Heading>
      <Suspense fallback={<LoadingComments/>}>
        <Comments commentPromise={commentsPromise} />
      </Suspense>
    </div>
  )
}
