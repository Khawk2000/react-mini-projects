import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import OpenAI from "openai";
import KeywordsModal from "./components/KeywordsModal";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openai = new OpenAI({
    apiKey: `${import.meta.env.VITE_OPENAI_APIKEY}`,
    dangerouslyAllowBrowser: true,
  });

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n" +
            text +
            "",
        },
      ],
      temperature: 0.5,
      max_tokens: 60,
      frequency_penalty: 0.8,
    };

    const response = await openai.chat.completions.create(options);

    console.log(response.choices[0]);

    const data = response.choices[0].text.trim();

    console.log(data);
    setKeywords(data);
    setLoading(false);
  };

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
