import React, { Component } from "react";
import AutosizeInput from "react-input-autosize";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./App.css";

class App extends Component {
  state = {
    lyrics: [
      "Overheard in",
      "Cavs locker room",
      "after",
      "Game 7.",
      '"He got me"',
      "Lebron",
      "said of",
      "Tatum's dunk over him.",
      "That f***ing",
      "Tatum",
      "boomed me.",
      "Lebron",
      "added",
      '"He\'s so good",',
      "repeating it four times.",
      "Lebron",
      "then said",
      "he",
      "wanted to add",
      "Tatum",
      "to the list of",
      "players he works out with",
      "this summer.",
    ],
    buttonText: "Copy to Clipboard",
  };

  componentDidMount() {
    this.textInput0.focus();
  }

  handleChange = (e, index) => {
    this.setState({
      lyrics: this.state.lyrics.map((lyric, i) =>
        i === index ? e.target.value : lyric,
      ),
    });
  };

  handleCopy = (_text, result) => {
    this.setState(
      { buttonText: result ? "Boomed!" : "Something went wrong" },
      () => {
        setTimeout(
          () => this.setState({ buttonText: "Copy to Clipboard" }),
          3000,
        );
      },
    );
  };

  render() {
    console.log("💥 He's so good 💥");
    console.log("💥 He's so good 💥");
    console.log("💥 He's so good 💥");
    console.log("💥 He's so good 💥");
    console.log("@jeanpaulsio")
    console.log("\n\n\n");
    return (
      <div className="main">
        <h1>He Boomed Me</h1>
        {this.state.lyrics.map((line, index) => {
          return (
            <AutosizeInput
              ref={input => {
                this[`textInput${index}`] = input;
              }}
              key={index}
              placeholder={line}
              value={this.state.lyrics[index]}
              onChange={e => this.handleChange(e, index)}
              onFocus={e => e.target.select()}
            />
          );
        })}
        <footer>
          <CopyToClipboard
            text={this.state.lyrics.join(" ")}
            onCopy={this.handleCopy}>
            <button>{this.state.buttonText}</button>
          </CopyToClipboard>
        </footer>
      </div>
    );
  }
}
export default App;
