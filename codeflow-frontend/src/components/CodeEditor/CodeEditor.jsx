import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState, useRef } from "react";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import { CODE_SNIPPETS } from "../../constants";
import CodeOutput from "../CodeOutput/CodeOutput";

const CodeEditor = () => {
  const editorReference = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const uponMounting = (editor) => {
    editorReference.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <SelectLanguage language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={uponMounting}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <CodeOutput />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
