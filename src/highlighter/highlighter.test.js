import { Highlighter } from './highlighter';
import { KeywordFinder } from './keywordFinder';
import { Keyword } from './keyword';
import { Colorizer } from './colorizer';
import { CaseChanger } from './caseChanger';


describe('Highlighter', () => {

  it('should highlight keyword with color blue', () => {

    let keywordFinder = new KeywordFinder();
    keywordFinder.addKeyword(new Keyword('if', 'blue'));
    keywordFinder.addKeyword(new Keyword('and', 'blue'));

    let colorizer = new Colorizer(keywordFinder);
    let highlighter = new Highlighter(keywordFinder, [colorizer]);

    let input = "abc is not equal to def if xyz and pqr are same";
    let expectedOutput = "abc is not equal to def [blue]if[blue] xyz [blue]and[blue] pqr are same";

    let output = highlighter.highlightKeywords(input);

    expect(output).toBe(expectedOutput)
  })

  it('should highlight keyword with different colors', () => {

    let keywordFinder = new KeywordFinder();
    keywordFinder.addKeyword(new Keyword('as', 'red'));
    keywordFinder.addKeyword(new Keyword('and', 'blue'));

    let colorizer = new Colorizer(keywordFinder);
    let highlighter = new Highlighter(keywordFinder, [colorizer]);

    let input = "as is not same as and";
    let expectedOutput = "[red]as[red] is not same [red]as[red] [blue]and[blue]";

    let output = highlighter.highlightKeywords(input);

    expect(output).toBe(expectedOutput)
  })

  it('should highlight keyword with different case', () => {

    let keywordFinder = new KeywordFinder();
    keywordFinder.addKeyword(new Keyword('as', 'red', 'capital'));
    keywordFinder.addKeyword(new Keyword('if', 'blue', 'lower'));
    keywordFinder.addKeyword(new Keyword('and', 'blue', 'capital'));

    let colorizer = new Colorizer(keywordFinder);
    let caseChanger = new CaseChanger(keywordFinder);
    let highlighter = new Highlighter(keywordFinder, [caseChanger, colorizer]);

    let input = "as If a and b are same";
    let expectedOutput = "[red]AS[red] [blue]if[blue] a [blue]AND[blue] b are same";

    let output = highlighter.highlightKeywords(input);

    expect(output).toBe(expectedOutput)
  })

})