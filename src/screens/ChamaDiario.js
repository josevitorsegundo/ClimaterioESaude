import React, { Component } from 'react';
import Button, {View} from 'react-native';
import TextDiario from '../texts/textDiario';

let date = ''
class  ChamaDiario extends React.Component {
    static navigationOptions = ({ navigation }) => {
      let info = navigation.getParam('otherParam', 'Diário')
      date = {
        day: info.day,
        month: info.month,
        year: info.year
      }
      let title = 'Diario ' + info.day + '/' + info.month + '/' + info.year
      return {
        
        title: title,

      };
      
    };
    
    render() {
      return (
        <TextDiario date={date}/>
      );
    }
}

export default ChamaDiario;