import { KeywordFinder } from './keywordFinder';
import { Keyword } from './keyword';

describe('KeywordFinder', () => {

  it('should return true for valid keyword', () => {

    var finder = new KeywordFinder();
    finder.addKeyword(new Keyword('if'));

    var result =  finder.isKeyword('if');

    expect(result).toBeTruthy();

  })

   it('should return keyword', () => {

    var finder = new KeywordFinder();
    finder.addKeyword(new Keyword('if'));

    var result =  finder.getKeyword('if');

    expect(result).toBeDefined();
    expect(result.value).toBe('if');

  })


})