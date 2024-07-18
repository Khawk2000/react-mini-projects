import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const types = ["image/png", "image/jpg", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setErr("");
    } else {
      setFile(null);
      setErr("Please select an image file (png, jpg, or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {err && <div className="error">{err}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;
