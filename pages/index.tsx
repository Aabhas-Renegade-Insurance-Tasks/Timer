import {
  Container,
  Box,
  Flex,
  Heading,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        height="100vh"
      >
        <Box
          padding={10}
          borderRadius={4}
          width={[300, 400, 500]}
          boxShadow="md"
          backgroundColor="white"
        >
          <Heading>Welcome!</Heading>
          <Stack marginTop={10} spacing={3}>
            <Input borderRadius={4} placeholder="First Name" size="sm" />
            <Input borderRadius={4} placeholder="Last Name" size="sm" />
            <Input borderRadius={4} placeholder="Username" size="sm" />
            <Button
              borderRadius={4}
              backgroundColor="pink.400"
              color="white"
              _hover={{
                bg: "pink.500",
              }}
            >
              Continue
            </Button>
          </Stack>
        </Box>
      </Flex>

      <Box position="absolute" zIndex={-1} bottom={0} left={0} width="100vw">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FEEBC8"
            fill-opacity="1"
            d="M0,64L34.3,85.3C68.6,107,137,149,206,176C274.3,203,343,213,411,218.7C480,224,549,224,617,192C685.7,160,754,96,823,64C891.4,32,960,32,1029,48C1097.1,64,1166,96,1234,122.7C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Container>
  );
};

export default Home;
