import {
  Text,
  Box,
  Flex,
  VStack,
  Center,
  Heading,
  Badge,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Timer: NextPage = () => {
  const [loading, setLoading] = useState(true);

  const userName = useSelector((state: any) => state.user.userName);
  const router = useRouter();

  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const [running, setRunning] = useState<boolean>(false);
  const [clock, setClock] = useState<number>(0);

  useEffect(() => {
    if (!userName) router.push("/");
    if (userName) setLoading(false);
  }, []);

  useEffect(() => {
    const tick = () => {
      setClock((prev) => prev + 1);
    };

    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (running && (minutes != 0 || seconds != 0)) {
      if (seconds == 0) {
        setSeconds(60);
        setMinutes((prev) => prev - 1);
        return;
      }

      setSeconds((prev) => prev - 1);
    }
  }, [clock]);

  /*









  */
  if (loading) return <div>loading ...</div>;

  return (
    <React.Fragment>
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="stretch"
        alignContent="stretch"
      >
        <Box width="full" background="orange.100"></Box>

        <Box width="full" background="pink.400"></Box>
      </Flex>

      <Center position="absolute" left="0" top="0" width="100vw" height="100vh">
        <Box
          backgroundColor="white"
          px="20"
          py="10"
          borderRadius={4}
          shadow="md"
        >
          <VStack>
            <Badge variant="outline" colorScheme="green">
              {userName}
            </Badge>

            <HStack>
              <Input
                type="number"
                _focus={{ outline: "none" }}
                value={minutes}
                onChange={(e) => {
                  if (!e.target.value) return 0;
                  setMinutes(parseInt(e.target.value));
                }}
              ></Input>

              <Heading>:</Heading>

              <Input
                type="number"
                _focus={{ outline: "none" }}
                value={seconds}
                onChange={(e) => {
                  if (!e.target.value) return 0;
                  setSeconds(parseInt(e.target.value));
                }}
              ></Input>
            </HStack>

            <HStack>
              <Button onClick={() => setRunning(true)} colorScheme="green">
                Start
              </Button>
              <Button onClick={() => setRunning(false)} colorScheme="pink">
                Pause
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </React.Fragment>
  );
};

export default Timer;
