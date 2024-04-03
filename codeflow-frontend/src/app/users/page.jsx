'use client';

import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import CodeEditor from "../../components/CodeEditor"
import { BackgroundBeams } from "../../components/ui/background-beams";
// import { SignIn } from "../../components/ui/page";
const App = () => {
  return (
    <ChakraProvider>
    <Box
    position="relative"
    minH="100vh"
    bg="#0f0a19"
    color="gray.500"
    px={6}
    py={8}
  >
    <BackgroundBeams/>
    <CodeEditor />
  </Box>
  </ChakraProvider>
  );
};

export default App;
