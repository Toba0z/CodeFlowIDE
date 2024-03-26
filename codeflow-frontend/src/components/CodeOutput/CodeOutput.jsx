import { Box, Button, Text} from "@chakra-ui/react";

const CodeOutput = () => {
  return (
    <Box w="50%">
      <Text mb={2} fontsize="lg">
        Code Output
      </Text>
      <Button variant="outline" colorScheme="green" mb={4}>Run Code</Button>
      <Box
      height='75vh'
            p={2}
            border='1px solid'
            borderRadius={4}
            borderColor = "#333"
      >
        test
      </Box>
    </Box>
  );
};

export default CodeOutput; 