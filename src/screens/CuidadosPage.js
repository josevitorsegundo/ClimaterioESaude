import React, { Component } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import styles from '../styles/stylesText';

import ChamaTextGeral from './ChamaTextGeral';

class CuidadosPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('otherParam', 'AppClimatério'),
      };
    };
  
    render() {
      // 2. Get the param, provide a fallback value if not available 
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID'); 
      const otherParam = navigation.getParam('otherParam', 'some default value');
      
      return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: '20' }}>
          <View style={styles.buttonStyle} >
          <Text/>
          <Button
            title="Climatério"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Climatério'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Estilo de Vida"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Estilo de Vida'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Atividade Física"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Atividade Física'})}
            color="#B665A0"
          />
          <Text/>
           <Button
            title="Massa Corporal"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Massa Corporal'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Alimentação"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Alimentação'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Sintomas"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sintomas'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Prevenção de Doenças"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Prevenção de Doenças'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Saúde Bucal"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Saúde Bucal'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Sexo"
            //onPress={() => this.props.navigation.navigate('TextMostraSexo')}
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sexo'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Terapias"
            onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Terapias'})}
            color="#B665A0"
          />
          <Text/>
          <Button
            title="Diário"
            onPress={() => this.props.navigation.navigate('Diário')}
            //onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Terapias'})}
            color="#B665A0"
          />
          </View>
        </View>
        </ScrollView>
      );
    }
}

export default CuidadosPage;