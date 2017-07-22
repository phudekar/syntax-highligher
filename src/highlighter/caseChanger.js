export class CaseChanger {

  constructor(keywordFinder) {
    this.keywordFinder = keywordFinder;
  }

  decorate(word) {
    let keyword = this.keywordFinder.getKeyword(word.original);
    if (keyword.caseStyle == 'capital') {
      return word.decorated.toUpperCase();
    }
    if (keyword.caseStyle == 'lower') {
      return word.decorated.toLowerCase();
    }
  }

}