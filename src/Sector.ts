export default class Sector {

  id: number = Date.now();

  text: string = '😀';

  constructor(text: string) {
    this.text = text;
  }

  editText(text: string){
    this.text=text;
  }

}