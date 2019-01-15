import React, { Component } from "react";
import AutosizeInput from "react-input-autosize";

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
  };

  copyToClipboard = () =>
    navigator.clipboard.writeText(this.state.lyrics.join(" "));

  handleChange = (e, index) => {
    const newLine = e.target.value;
    const lyrics = this.state.lyrics.map((lyric, i) => {
      return i === index ? newLine : lyric;
    });

    this.setState({ lyrics });
  };

  render() {
    return (
      <div className="main">
        <h1>He Boomed Me</h1>
        {this.state.lyrics.map((line, index) => {
          return (
            <AutosizeInput
              key={index}
              placeholder={line}
              value={this.state.lyrics[index]}
              onChange={e => this.handleChange(e, index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
