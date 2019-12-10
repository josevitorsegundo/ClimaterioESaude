import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, ScrollView, Image, Button, YellowBox } from 'react-native';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
YellowBox.ignoreWarnings(['Accessing view manager'])
//sytles do Texto
import styles from './src/styles/stylesText';
//texto -- Home
import TextHome from './src/texts/textHome';
//textos -- Cuidados
import TextAlimentos from './src/texts/textAlimento';
import TextEstilo from './src/texts/textEstiloVida';
import TextAtividadeFisica from './src/texts/textAtividaFisica';
import TextMassa from './src/texts/textPeso';
import TextSintomas from './src/texts/textSintomas';
import TextPrevencao from './src/texts/textPrevencao';
import TextSaudeBucal from './src/texts/textSaudeBucal';
import TextSexo from './src/texts/textSexo';
import TextTerapias from './src/texts/textTerapias';
//texto -- Diário
import TextDiario from './src/texts/textDiario';
//Aqui para teste de otimização
import TextGeral from './src/texts/textGeral';

//terminar os imports dos textos -- chamar textPeso e alterar textSintomas e textSintomas
//Otimizar esses imports -- será que tem como declarar tudo num só e chamar e passar parametro?

auxText = {
  local: ''
}

var auxLocal='Sexo';

//testar passagem de otherParam em onpress do Button
class  ChamaTextGeral extends React.Component {
  
  static navigationOptions = ({ navigationG }) => {
    return {
      title: navigationG.getParam('paramTest', ''),
      //title: navigationG.getParam('paramTest', 'Sexo'), //
    };
  };

  render() {
    const { navigationG } = this.props; //
    const paramTest = navigationG.getParam('paramTest', ''); //
    
    return (
      <TextGeral
      //ind={'Saúde Bucal'}
      //ind={auxLocal}
      ind={paramTest} //
      />
    );
  }
}

class  ChamaTerapias extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Terapias'),
    };
  };
  render() {
    return (
      <TextTerapias/>
    );
  }
}

class  ChamaSexo extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Sexo'),
    };
  };
  render() {
    return (
      <TextSexo/>
    );
  }
}

class  ChamaSaudeBucal extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Saúde Bucal'),
    };
  };
  render() {
    return (
      <TextSaudeBucal/>
    );
  }
}

class  ChamaPrevencao extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Prevenção de Doenças'),
    };
  };
  render() {
    return (
      <TextPrevencao/>
    );
  }
}

class  ChamaSintomas extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Sintomas'),
    };
  };
  render() {
    return (
      <TextSintomas/>
    );
  }
}

class ChamaMassaCorporal extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Massa Corporal'),
    };
  };
  render() {
    return (
      <TextMassa/>
    );
  }
}

class ChamaAtividadeFisica extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Atividade Física'),
    };
  };
  render() {
    return (
      <TextAtividadeFisica/>
    );
  }
}

class ChamaTextEstiloVida extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Estilo de Vida'),
    };
  };
  render() {
    return (
      <TextEstilo/>
    );
  }
}

class ChamaTextAlimentos extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'Alimentos'),
    };
  };
  render() {
    return (
      <TextAlimentos/>
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
        {/*
        <Button
          title="Go to Details"
          onPress={() => {
            // 1. Navigate to the Details route with params
            this.props.navigation.navigate('Cuidados', {
              itemId: 86,
              otherParam: 'Cuidados',
            });
          }}
          color="#B665A0"
        />*/}
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
        {/*
        <Text>Cuidados</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>*/}
        <View style={styles.buttonStyle} >
        {/*
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />*/}
        <Button
          title="Estilo de Vida"
          onPress={() => this.props.navigation.navigate('TextMostraEstilo')}
          color="#B665A0"
        />
        <Button
          title="Atividade Física"
          //antes de navegar pra outra tela alterar o props de navegaçao de chamaAtividadeFisica
         // onPress={()=> TextMostraAtividadeFisica.props.navigation.setParams({ otherParam: 'Atividade Física'})}
          String var_aux = 'ser' 
          onPress={() => this.props.navigation.navigate('TextMostraAtividadeFisica')}
          color="#B665A0"
        />
         <Button
          title="Massa Corporal"
          onPress={() => this.props.navigation.navigate('TextMostraMassaCorporal')}
          color="#B665A0"
        />
        <Button
          title="Alimentação"
          onPress={() => this.props.navigation.navigate('TextMostraAlimentos')}
          color="#B665A0"
        />
        <Button
          title="Sintomas"
          onPress={() => this.props.navigation.navigate('TextMostraSintomas')}
          color="#B665A0"
        />
        <Button
          title="Prevenção de Doenças"
          onPress={() => this.props.navigation.navigate('TextMostraPrevencao')}
          color="#B665A0"
        />
        <Button
          title="Saúde Bucal"
          onPress={() => this.props.navigation.navigate('TextMostraSaudeBucal')}
          color="#B665A0"
        />
        <Button
          title="Sexo"
          onPress={() => this.props.navigation.navigate('TextMostraSexo')}
          color="#B665A0"
        />
        <Button
          title="Terapias"
          onPress={() => this.props.navigation.navigate('TextMostraTerapias')}
          color="#B665A0"
        />
        <Button
          auxLocal='Sexo'
          title="Geral"
          //onPress={() => this.props.navigation.navigate('TextMostraGeral')}
          onPress={() => {
            this.props.navigationG.navigate('TextMostraGeral', { 
              paramTest: 'Saúde Bucal',
            });
          }}
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
    TextMostraAlimentos: ChamaTextAlimentos,
    TextMostraEstilo: ChamaTextEstiloVida,
    TextMostraAtividadeFisica: ChamaAtividadeFisica,
    TextMostraMassaCorporal: ChamaMassaCorporal,
    TextMostraSintomas: ChamaSintomas,
    TextMostraPrevencao: ChamaPrevencao,
    TextMostraSaudeBucal: ChamaSaudeBucal,
    TextMostraSexo: ChamaSexo,
    TextMostraTerapias: ChamaTerapias,
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

const AppNavigator = createDrawerNavigator({
  Home: RootStackH,
  Cuidados: RootStackC,
  //Falta Diário 
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

