import React, { useEffect, useState } from "react";
import { sectorSvg } from "./sectorSvg";
import { Button, Row, Col ,message} from "antd";
import Sector from "./Sector";

interface Props {
  toggleShow: () => void;
  optionList: Array<Sector>;
}

const randomNum = () => {
  const random = Math.random();
  const num = Math.round(random * 100) / 10;
  return num < 2 ? num + 3 : num;
};

const Selection = ({ toggleShow, optionList }: Props) => {
  const [svg, setSvg] = useState("");
  const [random, setRandom] = useState(0);
  const [turn, setTurn] = useState(0);
  const [showMsg,setShowMsg] =useState(false);

  useEffect(() => {
    const textList = Array.from(optionList, (opt) => opt.text);
    const svgImg = sectorSvg(textList);
    setSvg(svgImg);
  }, [optionList]);

  useEffect(() => {
    if (showMsg&&turn) {
      setTimeout(()=>{
        const index = Math.floor((1 - (turn % 1)) / (1 / optionList.length));
        message.success(optionList[index].text);
      },random*1000+500)
    }
    return setShowMsg(false)
  }, [optionList, random, showMsg, turn]);

  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button block onClick={toggleShow}>
            修改
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div className="sector-svg">
            <div
              className="svg"
              dangerouslySetInnerHTML={{ __html: svg }}
              style={{
                transform: `rotate(${turn}turn)`,
                transition: `all ${random}s ease-in`,
              }}
            ></div>
            <div className="pointer">
              <svg
                className="svg-pointer"
                version="1.1"
                width="10"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 50
                  L 5 0
                  L 10 50 Z
                 "
                  fill="#747d8c"
                />
              </svg>
            </div>
          </div>
          <Button
            type="primary"
            block
            onClick={() => {
              const num = randomNum();
              setRandom(num);
              setTurn(turn + num);
              setShowMsg(true);
            }}
          >
            开始
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Selection;
