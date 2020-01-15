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

//Teste calendário
import ChamaCalendario from './src/screens/ChamaCalendario';

//alterar textos
//não esquecer de remover botão mostrar de cuidados

const MenuButton3 = (
	<View>
		<TouchableOpacity onPress={() => {this.props.navigate('DrawerOpen')} }>
			<Icon name="bars" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/>
		</TouchableOpacity>
	</View>
);

const MenuButton2 = (
    <Button 
    title= 'T'
    onPress={() => {this.props.navigation.openDrawer();} }/>
);

const MenuButton = (props) => {
  const { navigate } = props.navigation
  return (
    <View>
      <TouchableOpacity onPress={() => {navigate('DrawerOpen')}}>
      <Icon
      name="menu"
      size={30}
      color="black" />
      </TouchableOpacity>
    </View>
  )
}
class DrawerButton extends Component {
  render (){
    return (
      <View>
      <Icon
      name="menu"
      size={30}
      color="black"
      onPress={() => navigation.navigate('DrawerOpen')}
      />
      </View>
    );
  }
};

const LeftDrawerScreen = ({ navigation }) => (
  <Text>Left Drawer</Text>
);

const RootStackCa = createStackNavigator(
  {
    Calendario: ChamaCalendario,
    //Diario: ChamaDiario,
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
      headerRight: <Button 
      title='T'
      onPress={() => {this.props.navigation.navigate('DrawerOpen'); }}
      />,
    },
  }
);

const DrawerNavigatorG = createDrawerNavigator({
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

const DrawerNavigatorF1 = createDrawerNavigator({
  TesteCalendario:RootStackCa,
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

const RootStackF1 = createStackNavigator(
  {
    Diario: ChamaDiario,
    Home: HomePage,
    Cuidados: CuidadosPage,
    TextMostraGeral: ChamaTextGeral,
    
  },
  {
    defaultNavigationOptions:  ({ navigation}) => ({
      headerStyle: {
        backgroundColor: '#B665A0',

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <Button
      title='T'
      onPress={() => {navigation.navigate( 'DrawerNavigatorF1' ) }} 
      />,
     
    }),
  }
);

//const App = createAppContainer(DrawerNavigatorG);
const App = createAppContainer(DrawerNavigatorF1);
//const App = createAppContainer(RootStackF1);
export default App;
