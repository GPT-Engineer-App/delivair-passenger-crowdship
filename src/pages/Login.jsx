import { useState } from "react";
import { Container, VStack, Input, Button, Text } from "@chakra-ui/react";

const Login = () => {
  const [otp, setOtp] = useState("");

  const handleLogin = () => {};

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Login</Text>
        <Input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
      </VStack>
    </Container>
  );
};

export default Login;
