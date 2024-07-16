import { useState } from "react";

const Search = ({ setTerm }) => {
  const [text, setText] = useState("");

  return (
    <div className="mt-4">
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Search Characters"
        id="inputLarge"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setTerm(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;
