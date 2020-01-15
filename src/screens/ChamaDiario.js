import React, { Component } from 'react';
import Button, {View} from 'react-native';
import TextDiario from '../texts/textDiario';

class  ChamaDiario extends React.Component {
    static navigationOptions = ({ navigation }) => {
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