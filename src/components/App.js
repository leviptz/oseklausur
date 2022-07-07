import { Home } from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Learning } from "./Learning";
import { Table } from "./Table";
import { useState } from "react";
import data from '../resources/daten';

function App() {
  const [rawData, setRawData] = useState(data)
  const [thema, setThema] = useState(data)
  const [erledigt, setErledigt] = useState(0)
  const [search, setSearch] = useState("");

  const saveAnswer = (answer, id) => {
    const newRawData = rawData;
    const themaIndex = newRawData.findIndex(element => element.id === id);
    newRawData[themaIndex].answer = answer;
    setRawData(newRawData)
  }

  const changeSearch = (newSearch) => {
    setSearch(newSearch);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Learning" element={<Learning saveAnswer={saveAnswer} erledigt={erledigt} setErledigt={setErledigt} thema={thema} setThema={setThema}/>}/>
        <Route path="/Table" element={<Table search={search} changeSearch={changeSearch} thema={rawData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
