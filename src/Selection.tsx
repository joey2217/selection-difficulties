import React, { useEffect, useState } from "react";
import { sectorSvg } from "./sectorSvg";
import { Button, Row, Col } from "antd";

interface Props {
  toggleShow: () => void;
}

const Selection = ({ toggleShow }: Props) => {
  const [svg, setSvg] = useState("");
  useEffect(() => {
    const svgImg = sectorSvg();
    setSvg(svgImg);
  }, []);
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
          <div
            className="sector-svg"
            dangerouslySetInnerHTML={{ __html: svg }}
          ></div>
          <Button type="primary" block>
            开始
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Selection;
