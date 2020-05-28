import React, { useEffect, useState, useRef } from "react";
import { Button, Row, Col, List, Typography, Input } from "antd";
import Sector from "./Sector";
import DataListFooter from "./components/DataListFooter";
import DataItem from "./components/DataItem";
import { CloseCircleOutlined } from "@ant-design/icons";

interface Props {
  toggleShow: () => void;
  optionList: Array<Sector>;
}

const DataList = ({ toggleShow, optionList }: Props) => {
  return (
    <>
      <Row justify="space-around">
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button type="primary" block onClick={toggleShow}>
            修改
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <List
            header={<div>Header</div>}
            footer={<DataListFooter />}
            bordered
            dataSource={optionList}
            renderItem={(sector: Sector) => (
              <List.Item>
                <DataItem sector={sector} />
                <CloseCircleOutlined />
              </List.Item>
            )}
          />
          <Button type="primary" block>
            开始
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default DataList;
