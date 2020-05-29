import React from "react";
import { Button, Row, Col, List } from "antd";
import Sector from "./Sector";
import DataListFooter from "./components/DataListFooter";
import DataItem from "./components/DataItem";
import { CloseCircleOutlined } from "@ant-design/icons";

interface Props {
  toggleShow: () => void;
  optionList: Array<Sector>;
  addOption: (option: Sector) => void;
  deleteOption: (id: number) => void;
  updateOption: (sector: Sector) => void;
}

const DataList = ({
  toggleShow,
  optionList,
  addOption,
  deleteOption,
  updateOption,
}: Props) => {
  return (
    <Row justify="center" className="data-list" >
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <List
          header={<div>共{optionList.length}项</div>}
          footer={<DataListFooter addOption={addOption} />}
          bordered
          dataSource={optionList}
          renderItem={(sector: Sector) => (
            <List.Item className="data-list">
              <DataItem sector={sector} updateOption={updateOption}/>
              <CloseCircleOutlined onClick={(e) => deleteOption(sector.id)} />
            </List.Item>
          )}
        />
        <Button type="primary" block onClick={toggleShow}>
          OK
        </Button>
      </Col>
    </Row>
  );
};
export default DataList;
