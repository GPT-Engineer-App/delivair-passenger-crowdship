import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, IconButton, Image } from "@chakra-ui/react";
import { FaPlane, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [newDelivery, setNewDelivery] = useState({ from: "", to: "", description: "" });

  const addDelivery = () => {
    if (newDelivery.from && newDelivery.to && newDelivery.description) {
      setDeliveries([...deliveries, newDelivery]);
      setNewDelivery({ from: "", to: "", description: "" });
    }
  };

  const removeDelivery = (index) => {
    setDeliveries(deliveries.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={2}>
          <FaPlane size="2em" />
          <Text fontSize="2xl" fontWeight="bold">
            DelivAir
          </Text>
        </HStack>
        <Text>Connect with airplane passengers to deliver your packages.</Text>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <VStack spacing={4}>
            <Input placeholder="From" value={newDelivery.from} onChange={(e) => setNewDelivery({ ...newDelivery, from: e.target.value })} />
            <Input placeholder="To" value={newDelivery.to} onChange={(e) => setNewDelivery({ ...newDelivery, to: e.target.value })} />
            <Input placeholder="Description" value={newDelivery.description} onChange={(e) => setNewDelivery({ ...newDelivery, description: e.target.value })} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addDelivery}>
              Add Delivery
            </Button>
          </VStack>
        </Box>
        <VStack spacing={4} width="100%">
          {deliveries.map((delivery, index) => (
            <HStack key={index} width="100%" p={4} borderWidth={1} borderRadius="lg" justifyContent="space-between">
              <Box>
                <Text fontWeight="bold">From: {delivery.from}</Text>
                <Text fontWeight="bold">To: {delivery.to}</Text>
                <Text>Description: {delivery.description}</Text>
              </Box>
              <IconButton aria-label="Remove" icon={<FaTrash />} colorScheme="red" onClick={() => removeDelivery(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
