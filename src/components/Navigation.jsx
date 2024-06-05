import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} p={4} bg="gray.100">
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/login">
        Login
      </Button>
      <Button as={Link} to="/request-delivery">
        Request Delivery
      </Button>
      <Button as={Link} to="/requests">
        Requests
      </Button>
      <Button as={Link} to="/passenger-view">
        Passenger View
      </Button>
      <Button as={Link} to="/support">
        Support
      </Button>
      <Button as={Link} to="/admin">
        Admin Panel
      </Button>
      <Button as={Link} to="/profile">
        Profile
      </Button>
      <Button as={Link} to="/dashboard">
        Dashboard
      </Button>
    </HStack>
  );
};

export default Navigation;
