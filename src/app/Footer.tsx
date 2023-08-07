
import { Box, Container, Text } from "./common/components";

export default function Footer() {
  return (
    <Box
      bg={'gray.50'}
      color={'gray.700'}
      as="footer"
    >
      <Container maxW={'5xl'} py={8}>
        <Text as="small">© 2023 rm</Text>
      </Container>
    </Box>
  )
}
