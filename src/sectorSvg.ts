const colorList = ['#eccc68', '#ff7f50', '#ff6b81', '#ffa502', '#ff6348', '#ff4757', '#7bed9f', '#70a1ff', '#5352ed', '#2ed573', '#1e90ff', '#3742fa']

const svgWrapper = (content: string, width: number) => (
  `<svg version="1.1"
     width="${width}" height="${width}"
     xmlns="http://www.w3.org/2000/svg">
     ${content}
  </svg>`
)

const pathWrapper = (path: string, fill: string, x: number, y: number, rotate: number, text: String = 'XXX') => (
  `<path d="${path}" fill="${fill}" >
    </path>
    <text x="${x}" y="${y}" font-size="20" text-anchor="middle" fill="#000" transform="rotate(${rotate})">${text}</text>
  `
)

// 四舍五入 保留 precision 位
export function round(number: number, precision: number) {
  return Math.round(number * 10 ** precision) / 10 ** precision;
}

/**
 * 绘制扇形
 * @param num  扇形数量
 * @param textList  扇形文字
 * @param r  扇形半径
 */
export function sectorSvg(textList: Array<string>, r: number = 100) {
  const colorNum = colorList.length;
  let num: number = textList.length;
  if (num <= 2) {
    num = 2;
  }

  const radian = 2 * Math.PI / num;

  let content: string = '';
  for (let i = 0; i < num; i++) {
    // const xAxisRotation = round((i+1) / num * 360, 2); //x轴旋转角度
    const xAxisRotation = 0; //x轴旋转角度
    const largeArcFlag = 0 //决定弧线是大于还是小于180度，0表示小角度弧，1表示大角度弧。
    const sweepFlag = 1 //表示弧线的方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧。
    const endX = r + r * round(Math.sin(radian * (i + 1)), 2)
    const endY = r - r * round(Math.cos(radian * (i + 1)), 2)
    const path = `M${r} ${r}
    L ${r + r * round(Math.sin(radian * i), 2)} ${r - r * round(Math.cos(radian * i), 2)}
    A ${r} ${r}, ${xAxisRotation}, ${largeArcFlag}, ${sweepFlag}, ${endX}, ${endY} 
    Z
    `
    const fill = colorList[i % colorNum]
    const textX = r + r * round(Math.sin(radian * (i + 0.5)), 2) / 2;
    const textY = r - r * round(Math.cos(radian * (i + 0.5)), 2) / 2;
    const rotate = 0
    content += pathWrapper(path, fill, textX, textY, rotate, textList[i]);
  }

  return svgWrapper(content, 2 * r);
}