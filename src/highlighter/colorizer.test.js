import { Colorizer } from './colorizer';
import { KeywordFinder } from './keywordFinder';
import { Keyword } from './keyword';

describe('Colorizer', () => {

  it('should colorize keyword', () => {

    let keywordFinder = new KeywordFinder();
    keywordFinder.addKeyword(new Keyword('if', 'blue'));
    let colorizer = new Colorizer(keywordFinder);

    let result = colorizer.decorate({ original: 'if', decorated: 'if' });

    expect(result).toBe('[blue]' + 'if' + '[blue]');

  })

})