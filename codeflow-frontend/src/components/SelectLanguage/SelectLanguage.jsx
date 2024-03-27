import {
  Box,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../../constants";

const SelectLanguage = ({ language, onSelect }) => {
  const listOfLanguage = Object.entries(LANGUAGE_VERSIONS);
  const active_color = "blue.400";
  return (
    <Box ml={2} mb={4} bg="#0f0a19">
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton bg="grey" as={Button}>
          {language}
        </MenuButton>
        <MenuList bg="#2f415e">
          {listOfLanguage.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? active_color : ""}
              bg={lang === language ? "grey.900" : "transparent"}
              _hover={{
                color: active_color,
                bg: "gray.900",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default SelectLanguage;
