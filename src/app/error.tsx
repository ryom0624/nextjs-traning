"use client";

import { useEffect } from "react";
import {Heading, Button} from './common/components'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error)
  }, [error]);

  return (
    <div>
      <Heading as="h1">エラーが発生しました</Heading>
      <p>{error.message}</p>
      <Button onClick={() => reset()}>リセット</Button>
    </div>
  )
}
