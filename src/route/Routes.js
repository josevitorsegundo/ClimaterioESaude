import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Accessing view manager']);

// old - import ChamaTextGeral from '../screens/ChamaTextGeral';

//Import of the Screens Stack C
import CuidadosPage from '../screens/CuidadosPage';

import ChamaDiario from '../screens/ChamaDiario';
import ChamaCalendario from '../screens/ChamaCalendario';

import TextClimaterioMenopausa from '../texts/textClimaterioMenopausa';
import TextSintomas from '../texts/textSintomas';
import TextPrevencao from '../texts/textPrevencao';
import TextSaudeBucal from '../texts/textSaudeBucal';
import TextSexo from '../texts/textSexo';
import TextTerapias from '../texts/textTerapias';

//Update recent screens
import TextFaleConosco from '../texts/textFaleConosco';
import TextLembretes from '../texts/textLembretes';

//Teste Login
import Login from '../utils/login';

//Import of the Screens Stack C - EstiloVida
import EstiloVida from '../screens/ChamaEstiloVida';
import TextAtividadeFisica from '../texts/textAtividaFisica';
import TextAlimentos from '../texts/textAlimento';
import TextMassa from '../texts/textPeso';
import TextSono from '../texts/textSono';

const StackC = createStackNavigator();

function MyStackC({ navigation }) {
  return (
    <StackC.Navigator
        screenOptions= {{
            headerStyle :{
                backgroundColor: '#9268D0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                //width: Dimensions.get('window'),
            },
        }}
    >
    <StackC.Screen name="Climatério e Saúde" component={CuidadosPage} />
    
    <StackC.Screen name="Climatério e Menopausa" component={TextClimaterioMenopausa}/>
    <StackC.Screen name="Estilo de Vida Saudável" component={EstiloVida}/>
    <StackC.Screen name="Atividade Física" component={TextAtividadeFisica} />
    <StackC.Screen name="Alimentação" component={TextAlimentos} />
    <StackC.Screen name="Índice de Massa Corporal" component={TextMassa} />
    <StackC.Screen name="Cuidados com o sono" component={TextSono} />
    <StackC.Screen name="Sintomas" component={TextSintomas}/>
    <StackC.Screen name="Prevenção de Doenças" component={TextPrevencao} />
    <StackC.Screen name="Saúde Bucal" component={TextSaudeBucal} />
    <StackC.Screen name="Sexualidade" component={TextSexo} />
    <StackC.Screen name="Terapia Hormonal e Práticas Complementares" component={TextTerapias} />
    
    <StackC.Screen name="Diário" component={ChamaCalendario} />
    <StackC.Screen name="Notas" component={ChamaDiario}/>
    
    <StackC.Screen name="Lembretes" component={TextLembretes}/>
    <StackC.Screen name="Fale Conosco" component={TextFaleConosco}/>
    <StackC.Screen name="Login" component={Login}/>

    </StackC.Navigator>
  );
} //#1407F3 //style={{color: "#1407F3"}}

export default class RoutesS extends Component {
    render() {
      return (
        <NavigationContainer>
        <MyStackC/>
        </NavigationContainer>
      );
    }
}
