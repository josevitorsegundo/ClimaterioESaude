import React, { Component } from 'react';
import TextLembretes from '../texts/textLembretes';

/*
Funcionalidade 3 
- Lembrete da data da da última mamografia e papanicolau - Até a data 05/12/2020, 
finalizar implementação versão inicial.
Fases:
	I. Estudo de cadastro de alarme/alerta ou área de app para isso.
	II. Implementação

Funcionalidade 4 
- Lembrete de medicamentos - Até a data 05/12/2020, 
finalizar implementação versão inicial.
Fases:
	I. Estudo de cadastro de alarme/alerta ou área de app para isso.
	II. Implementação 
*/

class  ChamaLembretes extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: "Lembretes",
      };
    };
    render() {
      const { navigation } = this.props;
      return (
        <TextLembretes/>
      );
    }
  }

export default ChamaLembretes;