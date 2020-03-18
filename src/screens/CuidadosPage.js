import React, { Component } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import styles from '../styles/stylesText';

import ChamaTextGeral from './ChamaTextGeral';

class CuidadosPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('otherParam', 'Climatério e Saúde'),
      };
    };
  
    render() {
      const { navigation } = this.props;
      //const itemId = navigation.getParam('itemId', 'NO-ID'); 
      //const otherParam = navigation.getParam('otherParam', 'some default value');
      
      return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: '20' }}>
          <View style={styles.buttonStyle} >
          <Text/>
          <Button
            title="Climatério e Menopausa"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Climatério e Menopausa'})}
            color="#9268D0"
          />
          <Text/>
          <Button
            title="Estilo de Vida Saudável"
            onPress={() => this.props.navigation.navigate('Estilo', {nome: 'Estilo de Vida Saudável'})}
            color="#9268D0"
          />
          <Text/>
          <Button
            title="Sintomas"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sintomas'})}
            color="#9268D0"
          />
          <Text/>
          <Button
            title="Prevenção de Doenças"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Prevenção de Doenças'})}
            color="#9268D0"
          />
          <Text/>
          <Button
            title="Saúde Bucal"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Saúde Bucal'})}
            color="#9268D0"
          />
          <Text/>
          <Button
            title="Sexo"
            //onPress={() => this.props.navigation.navigate('TextMostraSexo')}
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sexo'})}
            color="#9268D0"
          />
          <Text/>
          <Button
            title="Terapia Hormonal e práticas complementares"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Terapia Hormonal e práticas complementares'})}
            color="#9268D0"
          />
          <Text/>
          <Button
            title="Diário"
            onPress={() => this.props.navigation.navigate('Diário')}
            //onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Terapias'})}
            color="#9268D0"
          />
          </View>
        </View>
        </ScrollView>
      );
    }
}

export default CuidadosPage;