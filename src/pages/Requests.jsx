import { useState } from "react";
import { Container, VStack, HStack, Text, Box, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Requests = () => {
  const [requests, setRequests] = useState([
    { from: "City A", to: "City B", description: "Package 1", status: "Pending" },
    { from: "City C", to: "City D", description: "Package 2", status: "Delivered" },
  ]);

  const removeRequest = (index) => {
    setRequests(requests.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        {requests.map((request, index) => (
          <HStack key={index} width="100%" p={4} borderWidth={1} borderRadius="lg" justifyContent="space-between">
            <Box>
              <Text fontWeight="bold">From: {request.from}</Text>
              <Text fontWeight="bold">To: {request.to}</Text>
              <Text>Description: {request.description}</Text>
              <Text>Status: {request.status}</Text>
            </Box>
            <IconButton aria-label="Remove" icon={<FaTrash />} colorScheme="red" onClick={() => removeRequest(index)} />
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Requests;
