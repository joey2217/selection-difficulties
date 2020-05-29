import React, { useEffect, useState } from "react";
import "./App.css";
import Selection from "./Selection";
import DataList from "./DataList";
import Sector from "./Sector";

const OPTION_LIST = "option_list";

function App() {
  const [show, setShow] = useState(true);

  const [optionList, setOptionList] = useState<Array<Sector>>([]);

  const toggleShow = () => {
    const currentShow = !show;
    setShow(currentShow);
  };

  const addOption = (option: Sector) => {
    const list = [...optionList, option];
    setOptionList(list);
  };

  const deleteOption = (id: number) => {
    const list = [...optionList];
    const index = list.findIndex((item) => item.id === id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    setOptionList(list);
  };

  const updateOption = (sector: Sector) => {
    const list = [...optionList];
    const index = list.findIndex((item) => item.id === sector.id);
    if (index !== -1) {
      list[index].text = sector.text;
    }
    setOptionList(list);
  };

  useEffect(() => {
    const optionListStr = localStorage[OPTION_LIST];
    if (optionListStr) {
      const optionList = JSON.parse(optionListStr);
      setOptionList(optionList);
    }
  }, []);

  useEffect(() => {
    if (optionList.length > 0) {
      localStorage[OPTION_LIST] = JSON.stringify(optionList);
    }
  }, [optionList]);

  return (
    <div className="app">
      <div style={{ display: show ? "block" : "none" }}>
        <Selection toggleShow={toggleShow} optionList={optionList} />
      </div>
      <div style={{ display: show ? "none" : "block" }}>
        <DataList
          toggleShow={toggleShow}
          optionList={optionList}
          addOption={addOption}
          deleteOption={deleteOption}
          updateOption={updateOption}
        />
      </div>
    </div>
  );
}

export default App;
