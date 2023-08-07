import { NextApiRequest, NextApiResponse } from 'next'
import { Articles } from '../articles'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const slug = req.query.slug as string
  if(req.method === "GET") {
    await delay(3000)
    const article = Articles.find((article) => article.slug === slug)
    if(article) {
      res.status(200).json(article)
    } else {
      res.status(404).json({message: `Article not found`})
    }
  }


}
