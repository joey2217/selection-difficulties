import {round,sectorSvg} from '../sectorSvg'

test('test round',()=>{
  expect(round(3.14165,2)).toBe(3.14);
  expect(round(3.14165,1)).toBe(3.1);
  expect(round(3.555,1)).toBe(3.6);
})

test('test sectorSvg',()=>{
  expect(sectorSvg()).toMatch('')
})