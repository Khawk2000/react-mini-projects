import "./App.css";
import Character from "./components/Character";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import load from "./assets/spinner.gif";
import Search from "./components/Search";

const App = () => {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchChars = async () => {
      const result = await axios.get(
        `https://thronesapi.com/api/v2/Characters`
      );

      setChars(result.data);
      setIsLoading(false);
    };

    fetchChars();
  }, []);

  return (
    <div className="container text-center">
      <Header />
      <Search setTerm={setTerm} />
      <div className="row mt-5">
        {isLoading && <img src={load} />}
        {!isLoading &&
          chars
            .filter((char) => {
              return char.fullName.includes(term);
            })
            .map((char) => {
              return <Character key={char.id} char={char} />;
            })}
      </div>
    </div>
  );
};

export default App;
