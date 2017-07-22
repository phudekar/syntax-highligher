import React, { Component } from 'react';
import logo from './logo.svg';
import  hl from './highlighter';
import './App.css';

class App extends Component {

  constructor() {
    super();

    let keywordFinder = new hl.KeywordFinder();
    keywordFinder.addKeyword(new hl.Keyword('as', 'red', 'capital'));
    keywordFinder.addKeyword(new hl.Keyword('if', 'blue', 'lower'));
    keywordFinder.addKeyword(new hl.Keyword('and', 'blue', 'capital'));

    let colorizer = new hl.Colorizer(keywordFinder);
    let caseChanger = new hl.CaseChanger(keywordFinder);
    this.highlighter = new hl.Highlighter(keywordFinder, [caseChanger, colorizer]);

    this.state = {
      text: ''
    }
  }

  highlightText(text) {
    let highlightedText = this.highlighter.highlightKeywords(text);
    this.setState({ text: highlightedText });
  }

  render() {
    return (
      <div className="App">
        <textarea style={styles.editor} type="text" onChange={(e) => this.highlightText(e.target.value)} value={this.state.text} />
      </div>
    );
  }
}

const styles = {
  editor: {
    minWidth: "100%",
    minHeight: "100vh"
  }
}

export default App;
