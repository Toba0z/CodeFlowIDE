import { Box, Button, Text, useToast } from "@chakra-ui/react";
// import { codeExecutor } from "../../api";
import axios from "axios";
import { LANGUAGE_VERSIONS } from "../../constants";
import { useState } from "react";

const CodeOutput = ({ editorReference, language }) => {
  const toast = useToast();

  const [outPutRun, setOutPutRun] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // Destructure props
  const APIURL = "http://localhost:3001/api/execute";
  const runSourceCode = async () => {
    // Mark function as async
    const sourceCode = editorReference.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const response = await axios.post(APIURL, {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
          {
            content: sourceCode,
          },
        ],
      });
      const { run: result } = response.data;
      setOutPutRun(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error("Cannot post Codes", error);
      toast({
        title: "An error occurred. ",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Code Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runSourceCode}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "gray.#333"}
      >
        {outPutRun
          ? outPutRun.map((line, index) => <Text key={index}>{line} </Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default CodeOutput;
