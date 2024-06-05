import { Container, VStack, Text } from "@chakra-ui/react";

const PassengerView = () => {
  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Passenger View</Text>
        <Text>Here you can see the deliveries you can take.</Text>
        {}
      </VStack>
    </Container>
  );
};

export default PassengerView;
