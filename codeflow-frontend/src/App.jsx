import {Box} from "@chakra-ui/react";
import "./styles/App.scss";
import CodeEditor from "./components/CodeEditor/CodeEditor";
const App = () =>{
  return (
   
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>Toba is here
    <CodeEditor/>
    </Box>
    
  )
}

export default App;