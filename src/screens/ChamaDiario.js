import React, { Component } from 'react';
import TextDiario from '../texts/textDiario';

class  ChamaDiario extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      return {
        title: navigation.getParam('otherParam', 'Diário'),
      };
    };
    render() {
      return (
        <TextDiario/>
      );
    }
}

export default ChamaDiario;