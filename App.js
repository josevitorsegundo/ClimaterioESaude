import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, ScrollView, Button, YellowBox } from 'react-native';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
YellowBox.ignoreWarnings(['Accessing view manager'])
//sytles do Texto
import styles from './src/styles/stylesText';
//texto -- Home
import TextHome from './src/texts/textHome';
//texto -- Diário
import TextDiario from './src/texts/textDiario';
//Aqui para teste de otimização
import TextGeral from './src/texts/textGeral';

//alterar textos

var auxLocal = 'Sexo';

//testar passagem de otherParam em onpress do Button
class  ChamaTextGeral extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.nome,
    };
  };
  render() {
    const { navigation } = this.props;
    const paramTest = navigation.state.params.nome
    return (
      <TextGeral
      ind={paramTest} //
      />
    );
  }
}

class  ChamaDiario extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Diário'),
    };
  };
  render() {
    return (
      <TextDiario/>
    );
  }
}


class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextHome/>
      </View>
      </ScrollView>
    );
  }
}

class CuidadosPage extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Cuidados'),
    };
  };

  render() {
    // 2. Get the param, provide a fallback value if not available 
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID'); 
    const otherParam = navigation.getParam('otherParam', 'some default value');
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: '20' }}>
        <View style={styles.buttonStyle} >
        <Button
          title="Estilo de Vida"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Estilo de Vida'})}
          color="#B665A0"
        />
        <Button
          title="Atividade Física"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Atividade Física'})}
          color="#B665A0"
        />
         <Button
          title="Massa Corporal"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Massa Corporal'})}
          color="#B665A0"
        />
        <Button
          title="Alimentação"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Alimentação'})}
          color="#B665A0"
        />
        <Button
          title="Sintomas"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sintomas'})}
          color="#B665A0"
        />
        <Button
          title="Prevenção de Doenças"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Prevenção de Doenças'})}
          color="#B665A0"
        />
        <Button
          title="Saúde Bucal"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Saúde Bucal'})}
          color="#B665A0"
        />
        <Button
          title="Sexo"
          //onPress={() => this.props.navigation.navigate('TextMostraSexo')}
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Sexo'})}
          color="#B665A0"
        />
        <Button
          title="Terapias"
          onPress={() => this.props.navigation.navigate('TextMostraGeral', {nome: 'Terapias'})}
          color="#B665A0"
        />
        </View>
      </View>
    );
  }
}

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
