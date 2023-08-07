import { NextApiRequest, NextApiResponse } from "next";
import { Comments } from "./comments";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await delay(2500)
  if (req.method === "GET") {
    res.status(200).json(Comments);
  }
}
