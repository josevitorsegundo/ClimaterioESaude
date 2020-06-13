import React, { Component } from 'react';
import Routes from "./src/route/Routes";
import { YellowBox } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
YellowBox.ignoreWarnings(['Accessing view manager']);

export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

