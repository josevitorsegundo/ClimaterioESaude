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
        return (
            <ScrollView>
                <TextEstilo/>
               
                <View style={styles.buttonStyle} >
                
                <Button
                title="Atividade Física"
                onPress={() => this.props.navigation.navigate('Atividade Física')}
                color="#9268D0"
                />
                <Text/>
                <Button
                title="Alimentação"
                onPress={() => this.props.navigation.navigate('Alimentação')}
                color="#9268D0"
                />
                <Text/>
                <Button
                title="Índice de Massa Corporal"
                onPress={() => this.props.navigation.navigate('Índice de Massa Corporal')}
                color="#9268D0"
                />
                <Text/>
                <Button
                title="Cuidados com o Sono"
                onPress={() => this.props.navigation.navigate('Cuidados com o sono')}
                color="#9268D0"
                />

                </View>
            </ScrollView>
          
        );
    }
}

export default EstiloVida;
