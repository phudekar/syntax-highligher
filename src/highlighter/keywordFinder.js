export class KeywordFinder {

  constructor() {
    this.keywords = [];
  }

  addKeyword(keyword) {
    this.keywords.push(keyword);
  }

  isKeyword(word) {
    return this.keywords.map(k => k.value).indexOf(word.toLowerCase()) >= 0;
  }

  getKeyword(word) {
    return this.keywords.find(k => k.value === word.toLowerCase());
  }


}