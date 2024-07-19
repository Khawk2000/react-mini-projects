import PropTypes from "prop-types";
const Word = ({ word, correctL, hint }) => {
  return (
    <div>
      <div className="word">
        {word.split("").map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {correctL.includes(letter) ? letter : ""}
            </span>
          );
        })}
      </div>
      <div className="hint">Hint: {hint}</div>
    </div>
  );
};

Word.propTypes = {
  word: PropTypes.string,
  correctL: PropTypes.array,
  hint: PropTypes.string,
};

export default Word;
