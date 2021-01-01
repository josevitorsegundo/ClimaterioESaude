import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image, Button } from 'react-native';
import styles from '../styles/stylesText';



//expot em App e chamar tela no Button Cuidados

{/*
Begin coment

End coment
*/}

// Alarm
import { createAlarm } from 'react-native-simple-alarm';
import moment from 'moment';

class TextLembretes extends Component {
   
    componentDidMount = async() =>{
     //   this._getAlarms()
    }

    render (){
        return (
            <ScrollView>
            <View style={styles.container}>
                
                {/*
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text> </Text>
                <Image style={{width: 200, height: 200}} 
                source={require('../../assets/images/Lembretes1.jpg')}/>
                </View>
                
                */}

                <Text style={styles.textoTitulo}>Mamografia e Papanicolau:</Text>
                <Text style={styles.textoSubtitulo}>• ***</Text>

                <Button
                title="Criar Alarme"
                //onPress={() => this._createAlarm()}
                //onPress={<SimpleAlarm/>}
                color="#9268D0"
                />


                <Text style={styles.textoTitulo}>Medicamentos:</Text>
                <Text style={styles.textoSubtitulo}>• ***</ Text>


                <Text style={styles.textoSubtitulo}>1</ Text>

            </View>
            </ScrollView>
        );
    }
}

export default TextLembretes;

{/*

import * as SimpleAlarm from "./src/helpers";
export * from "./src/helpers";
export default { ...SimpleAlarm };

*/}