import { Container } from "./common/components";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as={'main'}
      maxW="container.lg"
      minH="calc(100vh - 115px - 2rem)"
      py={8}
    >
      {children}
    </Container>
  );

}
