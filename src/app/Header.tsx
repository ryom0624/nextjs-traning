import { Box, Flex, Button, Heading, Spacer } from "./common/components"
import NextLink from 'next/link';

export default function Header() {
  return (
    <Box as="header">
      <Flex
        as="header"
        bg={'gray.50'}
        color={'gray.700'}
        py={{ base: 2 }}
        px={{ base: 16 }}
        minH={'60px'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        align={'center'}
      >
        <Heading as="h1" size="lg">
          <NextLink href="/">Blog App</NextLink>
        </Heading>
        <Spacer/>
        <Button
          as={NextLink}
          fontSize={'sm'}
          bg={'orange.400'}
          color={'white'}
          _hover={{bg: 'orange.300'}}
          href={'/articles/new'}
        >記事を書く</Button>
      </Flex>
    </Box>
  )
}
