import { NextApiRequest, NextApiResponse } from "next";
import { Articles } from "./articles";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await delay(700)
  if (req.method === "GET") {
    res.status(200).json(Articles);
  }
  if (req.method === "POST") {
    res.status(200).json({"status": "ok"});
  }
}
