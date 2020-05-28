import React, { useEffect, useState } from "react";
import "./App.css";
import Selection from "./Selection";
import DataList from "./DataList";
import Sector from './Sector'

function App() {
  const [show, setShow] = useState(false);

  const [optionList,setOptionList] = useState<Array<Sector>>([new Sector('123')]);

  const toggleShow = () => {
    const currentShow = !show;
    setShow(currentShow);
  };

  const addOption = (option:Sector)=>{
    const list = [...optionList,option];
    setOptionList(list);
  }

  return (
    <div className="app">
      <div style={{ display: show ? "block" : "none" }}>
        <Selection toggleShow={toggleShow} />
      </div>
      <div style={{ display: show ? "none" : "block" }}>
        <DataList toggleShow={toggleShow}  optionList={optionList}/>
      </div>
    </div>
  );
}

export default App;
