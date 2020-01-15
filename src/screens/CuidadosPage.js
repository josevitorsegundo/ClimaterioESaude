import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/stylesText';

import ChamaTextGeral from './ChamaTextGeral';

class CuidadosPage extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      return {
        title: navigation.getParam('otherParam', 'Cuidados'),
      };
    };
  
    render() {
      // 2. Get the param, provide a fallback value if not available 
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID'); 
      const otherParam = navigation.getParam('otherParam', 'some default value');
      
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: '20' }}>
          <View style={styles.buttonStyle} >
          <Button
            title="Estilo de Vida"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Estilo de Vida'})}
            color="#B665A0"
          />
          <Button
            title="Atividade Física"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Atividade Física'})}
            color="#B665A0"
          />
           <Button
            title="Massa Corporal"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Massa Corporal'})}
            color="#B665A0"
          />
          <Button
            title="Alimentação"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Alimentação'})}
            color="#B665A0"
          />
          <Button
            title="Sintomas"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sintomas'})}
            color="#B665A0"
          />
          <Button
            title="Prevenção de Doenças"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Prevenção de Doenças'})}
            color="#B665A0"
          />
          <Button
            title="Saúde Bucal"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Saúde Bucal'})}
            color="#B665A0"
          />
          <Button
            title="Sexo"
            //onPress={() => this.props.navigation.navigate('TextMostraSexo')}
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sexo'})}
            color="#B665A0"
          />
          <Button
            title="Terapias"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Terapias'})}
            color="#B665A0"
          />
          </View>
        </View>
      );
    }
}

export default CuidadosPage;