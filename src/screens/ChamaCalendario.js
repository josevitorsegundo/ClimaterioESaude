import React, { Component } from 'react';
import {View, Text, Button, Image} from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
//import { createStackNavigator } from 'react-navigation-stack';

//import dos diario
//import ChamaDiario from '../screens/ChamaDiario';

LocaleConfig.locales['pt'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Mai','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
};

LocaleConfig.defaultLocale = 'pt';

import TextDiario from '../texts/textDiario';

class ChamaCalendario extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
          //title: navigation.getParam('otherParam', 'Calendário'),
            title: 'Diário',
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

                //navegar para uma tela Stack de escolha Diário ou Sentimentos -- check button
               
               this.props.navigation.navigate('Notas', {otherParam: day});
               // <TextDiario/>
               
                // <Button title='aperta'/>
               
                // <ChamaDiario/>
                //console.log('selected day', day);
            }}
            />
            </View>
        );
    }
}

export default ChamaCalendario;