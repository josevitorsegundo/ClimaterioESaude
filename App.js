import React, { Component } from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { YellowBox, View, TouchableOpacity,Button } from 'react-native';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
YellowBox.ignoreWarnings(['Accessing view manager'])

//alterar textos
//Import das screens
import ChamaDiario from './src/screens/ChamaDiario';
import CuidadosPage from './src/screens/CuidadosPage';
import ChamaTextGeral from './src/screens/ChamaTextGeral';
import EstiloVida from './src/screens/ChamaEstiloVida';
import ChamaCalendario from './src/screens/ChamaCalendario';

const RootStackG = createStackNavigator({
  Cuidados: CuidadosPage,
  TextMostraGeral: ChamaTextGeral,
  Estilo: EstiloVida,
  Diário: ChamaCalendario,
  Notas: ChamaDiario,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#9268D0',//'#B665A0',//

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);

const App = createAppContainer(RootStackG);
export default App;
