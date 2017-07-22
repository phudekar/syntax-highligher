export class Colorizer {

  constructor(keywordFinder) {
    this.keywordFinder = keywordFinder;
  }

  decorate(word) {
    let color = this.keywordFinder.getKeyword(word.original).color;
    return `[${color}]${word.decorated}[${color}]`;
  }

}