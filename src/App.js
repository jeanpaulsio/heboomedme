import React, { Component } from "react";
import "./App.css";

const EDITABLE_FIELDS = [1, 3, 4, 5, 7, 9, 11, 13, 15, 17, 19, 21];

class App extends Component {
  state = {
    lyrics: [
      "Overheard in",
      "Cavs locker room", // 1
      "after",
      "Game 7.", //
      '"He got me"', //
      "Lebron", //
      "said of",
      "Tatum's dunk over him.", //
      "That f***ing",
      "Tatum", //
      "boomed me.",
      "Lebron", //
      "added",
      '"He\'s so good",', //
      "repeating it four times.",
      "Lebron", //
      "then said",
      "he", //
      "wanted to add",
      "Tatum", //
      "to the list of",
      "players he works out with", //
      "this summer.",
    ],
  };

  copyToClipboard = () =>
    navigator.clipboard.writeText(this.state.lyrics.join(" "));

  handleChange = (e, index) => {
    // lebron is 5, 11, 15
    // tatum is 9, 19
    const newLine = e.target.value;
    const newLyrics = this.state.lyrics.map((lyric, i) => {
      if (i === index) {
        return newLine;
      }

      return lyric;
    });

    this.setState({
      lyrics: newLyrics,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>He Boomed Me</h1>
        {this.state.lyrics.map((line, index) => {
          if (EDITABLE_FIELDS.includes(index)) {
            return (
              <input
                className="editable-line"
                key={index}
                placeholder={line}
                onChange={e => this.handleChange(e, index)}
              />
            );
          }

          return (
            <span key={index} className="line">
              {line}
            </span>
          );
        })}
        <div>
          <button className="button" onClick={this.copyToClipboard}>
            copy
          </button>
        </div>
      </div>
    );
  }
}

export default App;
