const WrongLetters = ({ wrongL }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongL.length > 0 && <p>Wrong</p>}
        {wrongL
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ",", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
