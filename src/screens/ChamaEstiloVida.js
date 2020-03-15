import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import styles from '../styles/stylesText';
import TextEstilo from '../texts/textEstiloVida';

import ChamaTextGeral from './ChamaTextGeral';

class EstiloVida extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'Estilo de Vida Saudável'),
        };
      };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID'); 
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <ScrollView>
                <TextEstilo/>
               
                <View style={styles.buttonStyle} >
                
                <Button
                title="Atividade Física"
                onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Atividade Física'})}
                color="#9268D0"
                />
                <Text/>
                <Button
                title="Alimentação"
                onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Alimentação'})}
                color="#9268D0"
                />
                <Text/>
                <Button
                title="Índice de Massa Corporal"
                onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Índice de Massa Corporal'})}
                color="#9268D0"
                />
                <Text/>
                <Button
                title="Cuidados com o Sono"
                onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Cuidados com o Sono'})}
                color="#9268D0"
                />

                </View>
            </ScrollView>
          
        );
    }
}

export default EstiloVida;
