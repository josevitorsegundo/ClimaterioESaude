import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image, Button } from 'react-native';
import styles from '../styles/stylesText';

import * as SimpleAlarm from "../helpers";
export * from "../helpers";

//import SimpleAlarm from '../screens/chamaLembreteAlarm';

//expot em App e chamar tela no Button Cuidados

{/*
Begin coment

End coment
*/}

// Alarm
import { createAlarm } from 'react-native-simple-alarm';
import moment from 'moment';
//
/* _createAlarm = async () => {
  try {
    await createAlarm({
        active: false,
        date: moment().format(),
        message: 'message',
        snooze: 1,
      });
  } catch (e) {
    console.log('erro ao criar')
  }
} */

import { getAlarms } from 'react-native-simple-alarm';
// retorna todos os alarmes
/* _getAlarms = async () => {
  try {
    const alarms = await getAlarms();
  } catch (e) {}
} */

//getAlarmById
//Returns alarm object given its id. If trying to get an id that does not exist, it will return null and throw an error.
import { getAlarmById } from 'react-native-simple-alarm';
_getAlarmsId = async () => {
  let id = '07699912-87d9-11ea-bc55-0242ac130003';
  
  try {
    const alarm = await getAlarmById(id);
  } catch (e) {}
}

//editAlarm
//Given alarm object, edits the alarm. If alarm active prop is set to true, it will create a scheduled push notification for alarm based on the date. If alarm active prop is set to false, it will cancel scheduled push notifications for alarm. Returns edited alarm. If alarm id does not exist, it will return null and throw an error.
import { editAlarm } from 'react-native-simple-alarm';
//import Moment from 'moment';
_editAlarm = async () => {
  let id = '07699912-87d9-11ea-bc55-0242ac130003';
  
  try {
    await editAlarm({
        id,
        date: moment().add(1, 'days').format(),
        snooze: 1,
        message: 'Message',
        active: true
      });
  } catch (e) {}
}

//activateAlarmById
//Given alarm id, sets alarm active prop to true, and creates scheduled push notification for alarm based on the date. Use this instead of editAlarm if you simply want to set the alarm active prop to true. If trying to get an id that does not exist, it will return null and throw an error.
import { activateAlarmById } from 'react-native-simple-alarm';
activateAlarm = async () => {
  let id = '07699912-87d9-11ea-bc55-0242ac130003';
  
  try {
    await activateAlarmById(id);
  } catch (e) {}
}

//cancelAlarmById
//Given alarm id, sets alarm active prop to false, and cancels scheduled push notification for alarm based on the date. Call this when you want to cancel the alarm, and keep the alarm as well. Sets active prop to false. If trying to get an id that does not exist, it will return null and throw an error.
import { cancelAlarmById } from 'react-native-simple-alarm';
_cancelAlarmById = async () => {
  let id = '07699912-87d9-11ea-bc55-0242ac130003';
  
  try {
    await cancelAlarmById(id);
  } catch (e) {}
}

//deleteAlarmById
//Given alarm id, deletes alarm and cancels the scheduled push notification. Returns array of alarms after deletion. If trying to get an id that does not exist, it will return null and throw an error.
import { deleteAlarmById } from 'react-native-simple-alarm';
_deleteAlarmById = async () => {
  let id = '07699912-87d9-11ea-bc55-0242ac130003';
  
  try {
    await deleteAlarmById(id);
  } catch (e) {}
}

//deleteAllAlarms
//Deletes all alarms and cancels all alarm scheduled push notifications. Returns array of alarms after deletion (which will be empty array).
import { deleteAllAlarms } from 'react-native-simple-alarm';
import { extend } from 'lodash';
_deleteAllAlarms = async () => {
  try {
    await deleteAllAlarms();
  } catch (e) {}
}


class TextLembretes extends Component {
    /** */
    _createAlarm = async () => {
        try {
          await createAlarm({
              active: false,
              date: moment().format(),
              message: 'message',
              snooze: 1,
            });
        } catch (e) {
          console.log('erro ao criar')
        }
    } 

    _getAlarms = async () => {
        try {
          const alarms = await getAlarms();
        } catch (e) {}
      }

    componentDidMount = async() =>{
        this._getAlarms()
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
                onPress={() => this._createAlarm()}
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