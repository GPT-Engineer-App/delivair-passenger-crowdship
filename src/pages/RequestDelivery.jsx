import { useState } from "react";
import { Container, VStack, Input, Button, Text } from "@chakra-ui/react";

const RequestDelivery = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");

  const handleRequest = () => {};

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Request Delivery</Text>
        <Input placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
        <Input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button onClick={handleRequest}>Submit Request</Button>
      </VStack>
    </Container>
  );
};

export default RequestDelivery;
