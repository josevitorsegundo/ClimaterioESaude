import React, { Component } from 'react';
import Routes from "./src/route/Routes";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Accessing view manager']);
YellowBox.ignoreWarnings(['Calling']);

// Após update de SDK para 40.0.0
YellowBox.ignoreWarnings(['Your project']);
YellowBox.ignoreWarnings(['YellowBox']);

export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

