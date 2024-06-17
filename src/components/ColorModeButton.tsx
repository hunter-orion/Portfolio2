import { HStack, useColorMode, Text, Switch } from "@chakra-ui/react";

const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text padding={2}>Use the force</Text>
    </HStack>
  );
};

export default ColorModeButton;
