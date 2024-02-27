import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [word, setWord] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  };
  return (
    <div className="App">
      <Header tittle="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
