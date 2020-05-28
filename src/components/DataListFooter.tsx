import React, { useState } from "react";
import { Button, Input } from "antd";

const DataListFooter = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Basic usage"
      />
      <Button type="primary" onClick={() => console.log(value)} block>
        Primary
      </Button>
    </div>
  );
};
export default DataListFooter;
