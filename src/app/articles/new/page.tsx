'use client';

import { Button, FormControl, FormLabel, Heading, Input, Textarea } from "../../common/components";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function CreateArticle() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    setLoading(false);
    router.push("/");
    startTransition(() => {
      router.refresh();
    })
  }

  return (
    <div>
      <Heading as="h1">Create Article</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormLabel>Content</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            >
            </Textarea>
            <Button
              type="submit"
              color='white'
              bg='orange.400'
              isLoading={isLoading || isPending}
              mt={4}
            >
              Submit
            </Button>
          </FormControl>
        </form>
    </div>
  )



}
