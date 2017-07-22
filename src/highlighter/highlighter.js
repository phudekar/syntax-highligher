import { KeywordFinder } from './keywordFinder';
import { Colorizer } from './colorizer';

export class Highlighter {

  constructor(keywordFinder, decorators) {
    this.keywordFinder = keywordFinder;
    this.decorators = decorators;
  }

  highlightKeywords(input) {
    var words = input.split(/ /);
    var output = '';
    for (let index in words) {
      let word = words[index];
      if (this.keywordFinder.isKeyword(word)) {
        output += ' ' + this.decorate(word);
      } else {
        output += ' ' + word
      }
    }

    return output.substring(1);
  }

  decorate(word) {
    var decorated = word;
    for (var index = 0; index < this.decorators.length; index++) {
      decorated = this.decorators[index].decorate({ decorated: decorated, original: word });
    }
    return decorated;
  }

}