import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { YellowBox } from 'react-native';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
YellowBox.ignoreWarnings(['Accessing view manager'])

//Import das screens
import ChamaDiario from './src/screens/ChamaDiario';
import HomePage from './src/screens/HomePage';
import CuidadosPage from './src/screens/CuidadosPage';
import ChamaTextGeral from './src/screens/ChamaTextGeral';

//alterar textos
//não esquecer de remover botão mostrar de cuidados

const RootStackH = createStackNavigator(
  {
    Home: HomePage,
  },
  {
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

const RootStackC = createStackNavigator(
  {
    Cuidados: CuidadosPage,
    TextMostraGeral: ChamaTextGeral,
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

const RootStackD = createStackNavigator(
  {
    Diario: ChamaDiario,
  },
  {
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

const AppNavigator = createDrawerNavigator({
  Home: RootStackH,
  Cuidados: RootStackC,
  Diário: RootStackD, 
},{
  drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#B665A0',
      inactiveTintColor: '#B665A0',
    },
}
);

const App = createAppContainer(AppNavigator);
//const App = createAppContainer(RootStack);
export default App;
