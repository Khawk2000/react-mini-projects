import { Box, Image, Text, Flex } from "@chakra-ui/react";
import openAILogo from "../assets/openai.png";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={openAILogo} marginRight={1} />
        <Text>Powered By OpenAI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
