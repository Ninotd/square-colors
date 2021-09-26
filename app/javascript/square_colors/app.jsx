import React, { Component } from 'react';
import SquareList from './square_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      small_squares: [],
    };
  }

  componentWillMount() {
    const fetchColors = fetch("/api/v1/colors").then(r => r.json()).then(
      (data) => {
        const squares = data
        this.setState({
          small_squares: data
        });
    })
  }

  addSquare(e) {
    const backgroundStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
    const url = "/api/v1/colors";

    const promise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({colorcode:backgroundStyle})
    }).then(r => r.json()).then(
      (data) => {
        const squares = data
        this.setState({
          small_squares: data
        });
      });
  };

  render() {
    return (
      <div className="app-wrapper">
        <div className="button-ur" onClick={this.addSquare.bind(this)}></div>
        <div className="button-ul" onClick={this.addSquare.bind(this)}></div>
        <div className="button-bl" onClick={this.addSquare.bind(this)}></div>
        <div className="button-br" onClick={this.addSquare.bind(this)}></div>
        <SquareList squares={this.state.small_squares} />
      </div>
    );
  }
}

export default App;
