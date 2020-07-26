import React, { Component } from 'react';
import Routes from "./src/route/Routes";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Accessing view manager']);

export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

