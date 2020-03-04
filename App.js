import React, { Component } from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { YellowBox, View, TouchableOpacity,Button } from 'react-native';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
YellowBox.ignoreWarnings(['Accessing view manager'])

//Import das screens
import ChamaDiario from './src/screens/ChamaDiario';
import HomePage from './src/screens/HomePage';
import CuidadosPage from './src/screens/CuidadosPage';
import ChamaTextGeral from './src/screens/ChamaTextGeral';
import EstiloVida from './src/screens/ChamaEstiloVida';

//Teste calendário
import ChamaCalendario from './src/screens/ChamaCalendario';

//alterar textos
//não esquecer de remover botão mostrar de cuidados

const RootStackG = createStackNavigator({
  Cuidados: CuidadosPage,
  TextMostraGeral: ChamaTextGeral,
  Estilo: EstiloVida,
  Diário: ChamaCalendario,
  Notas: ChamaDiario,
},
{
  // The header config
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#B665A0',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);

//const App = createAppContainer(DrawerNavigatorG);
//const App = createAppContainer(DrawerNavigatorF1);
const App = createAppContainer(RootStackG);
export default App;
