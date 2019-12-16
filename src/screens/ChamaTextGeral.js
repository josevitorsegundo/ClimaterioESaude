import React, { Component } from 'react';
import TextGeral from '../texts/textGeral';

class  ChamaTextGeral extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.state.params.nome,
      };
    };
    render() {
      const { navigation } = this.props;
      const paramTest = navigation.state.params.nome
      return (
        <TextGeral
        ind={paramTest} //
        />
      );
    }
  }

export default ChamaTextGeral;