import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import words from "../src/words.json";
import { showNoti as show } from "../src/helpers/helpers";
import Noti from "./components/Noti";
import Popup from "./components/Popup";

function App() {
  var randomNum = Math.random();
  const [playable, setPlayable] = useState(true);
  const [correctL, setCorrectL] = useState([]);
  const [wrongL, setWrongL] = useState([]);
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(randomNum * words.length)].word
  );
  const [hint, setHint] = useState(
    words[Math.floor(randomNum * words.length)].definition
  );
  const [showNoti, setShowNoti] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctL.includes(letter)) {
            setCorrectL((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNoti);
          }
        } else {
          if (!wrongL.includes(letter)) {
            setWrongL((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNoti);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctL, wrongL, playable]);

  function playAgain() {
    setPlayable(true);

    //Empty Arrays
    setCorrectL([]);
    setWrongL([]);
    var randomNum = Math.random();
    setSelectedWord(words[Math.floor(randomNum * words.length)].word);
    setHint(words[Math.floor(randomNum * words.length)].definition);
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongL={wrongL} />
        <WrongLetters wrongL={wrongL} />
        {selectedWord && (
          <Word word={selectedWord} correctL={correctL} hint={hint} />
        )}
      </div>
      {selectedWord && (
        <Popup
          correctL={correctL}
          wrongL={wrongL}
          word={selectedWord}
          setPlayable={setPlayable}
          playAgain={playAgain}
        />
      )}
      <Noti showNoti={showNoti} />
    </>
  );
}

export default App;
