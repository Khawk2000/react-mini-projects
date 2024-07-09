import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Output from "./Components/Output";
import Select from "./Components/Controls/Select";

function App() {
  const [paras, setParas] = useState(4);
  const [text, setText] = useState("");

  useEffect(() => {
    const getSampleText = async () => {
      const res = await axios.get(
        `http://hipsum.co/api/?type=hipster-centric&paras=${paras}`
      );
      setText(res.data);
    };

    getSampleText();
  }, [paras]);

  const changeParas = (num) => {
    setParas(num)
  }

  return (
    <>
    <h1 className="text-body-secondary mb-3 mx-auto">React Sample Text Generator</h1>
      <h3 className="text-body-primary">Number of paragraphs:</h3>
      <Select paras={paras} changeParas={changeParas}/>
      <Output ptext={text} />
    </> 
  );
}

export default App;
