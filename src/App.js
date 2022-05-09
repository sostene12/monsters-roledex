import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [seachField, setSearchField] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(seachField.toLowerCase());
  });
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
