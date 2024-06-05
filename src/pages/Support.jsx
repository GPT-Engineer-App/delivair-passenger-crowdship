import { Container, VStack, Text, Textarea, Button } from "@chakra-ui/react";

const Support = () => {
  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Support</Text>
        <Textarea placeholder="Describe your issue" />
        <Button>Submit</Button>
      </VStack>
    </Container>
  );
};

export default Support;
