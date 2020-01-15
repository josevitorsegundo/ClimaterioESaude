import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
//import { createStackNavigator } from 'react-navigation-stack';

//import dos diario
//import ChamaDiario from '../screens/ChamaDiario';

class ChamaCalendario extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
          //title: navigation.getParam('otherParam', 'Calendário'),
            title: 'Calendário',
            headerRight: (
                <Button
                  //onPress={() => this.props.goBack('DrawerNavigatorF1')}
                  //DrawerNavigatorF1
                  title="Info"
                  color="#fff"
                />
            ),
        };
      };
    render(){
        const { navigation } = this.props;
        return (
            <View style={{ paddingTop: 50, flex: 1 }}>
            <Calendar //style={stylesCalendar.theme}
            theme={{
                monthTextColor: '#B665A0',
                todayTextColor: '#B665A0',
                indicatorColor: '#B665A0',
                arrowColor: '#B665A0',
            }}
            monthFormat={'MMM yyyy'}
            onDayPress={day => {
                //alert('Clicastes \n'+day.day)
                
                this.props.navigation.navigate('Diario');//navegar para uma tela Stack de escolha Diário ou Sentimentos
               // <Button title='aperta'/>
               
                // <ChamaDiario/>
                console.log('selected day', day);
            }}
            />
            </View>
        );
    }
}

export default ChamaCalendario;