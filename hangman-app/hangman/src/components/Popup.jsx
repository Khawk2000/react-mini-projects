import { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({ correctL, wrongL, word, setPlayable, playAgain }) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctL, wrongL, word) === "win") {
    finalMessage = "Congratulations! You won! :)";
    playable = false;
  } else if (checkWin(correctL, wrongL, word) === "lose") {
    finalMessage = "Whomp Whomp you lost! :(";
    finalMessageRevealWord = `The word was ${word}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  }, []);

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
