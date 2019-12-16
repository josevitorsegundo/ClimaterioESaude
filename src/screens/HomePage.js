import React, { Component } from 'react';
import TextHome from '../texts/textHome';

class HomePage extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      return (
          <TextHome/>
      );
    }
}

export default HomePage;
