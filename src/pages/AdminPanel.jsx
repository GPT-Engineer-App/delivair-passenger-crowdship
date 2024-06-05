import { Container, VStack, Text } from "@chakra-ui/react";

const AdminPanel = () => {
  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Admin Panel</Text>
        <Text>Manage the application here.</Text>
        {}
      </VStack>
    </Container>
  );
};

export default AdminPanel;
