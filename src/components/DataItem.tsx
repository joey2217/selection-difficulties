import React, { useState, useEffect, useRef } from "react";
import Sector from "../Sector";
import { Input } from "antd";

interface Props {
  sector: Sector;
  updateOption: (sector: Sector) => void;
}

const DataItem = ({ sector, updateOption }: Props) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const inputEl = useRef<Input>(null);

  useEffect(() => {
    setValue(sector.text);
  }, [sector.text]);

  useEffect(() => {
    inputEl.current?.focus();
  }, [edit]);

  return edit ? (
    <Input
      ref={inputEl}
      defaultValue={sector.text}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onBlur={() => {
        sector.text = value;
        updateOption(sector);
        setEdit(!edit);
      }}
    />
  ) : (
    <div
      className="data-item"
      onClick={() => {
        setEdit(!edit);
      }}
    >
      {sector.text}
    </div>
  );
};
export default DataItem;
