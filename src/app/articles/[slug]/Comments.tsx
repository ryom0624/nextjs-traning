import { Comment } from '../../types';
import { Text, VStack, Flex, StackDivider, Avatar } from '../../common/components';

export default async function Comments({
  commentPromise
}: {
  commentPromise: Promise<Comment[]>
}) {
  const comments = await commentPromise;

  if(!comments) {
    return (
      <Text>コメントはありません。</Text>
    )
  }

  return (
    <VStack spacing={4} as="ul" align="stretch" divider={<StackDivider borderColor="gray.200" />}>
      {comments.map((comment: Comment) => (
        <CommentItem key={comment.id} comment={comment}/>
      ))}
    </VStack>
  )
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <Flex as="li" listStyleType="none" align="center">
      <Avatar name={comment.author.name} src={comment.author.avatarUrl} />
      <Text fontSize="sm" color="gray.600">{comment.body}</Text>
    </Flex>
  )
}
