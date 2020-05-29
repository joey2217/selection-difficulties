import React, { useState } from "react";
import { Button, Input } from "antd";
import Sector from "../Sector";

interface Props {
  addOption: (option: Sector) => void;
}

const DataListFooter = ({ addOption }: Props) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="新项目"
      />
      <Button
        type="dashed"
        onClick={() => {
          if (value) {
            addOption(new Sector(value));
            setValue("");
          }
        }}
        block
      >
        添加
      </Button>
    </div>
  );
};
export default DataListFooter;
