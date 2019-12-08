import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import textAlimentos from './src/texts/textAlimento';
import styles from './src/styles/stylesText';
import TextAlimentos from './src/texts/textAlimento';
import TextEstilo from './src/texts/textEstiloVida';
import TextAtividadeFisica from './src/texts/textAtividaFisica';
import TextMassa from './src/texts/textPeso';
import TextSintomas from './src/texts/textSintomas';
import TextPrevencao from './src/texts/textPrevencao';
//import TextTerapias from './src/texts/textTerapias';
import TextGeral from './src/texts/textGeral';

//terminar os imports dos textos -- chamar textPeso e alterar textSintomas e textSintomas
//Otimizar esses imports -- será que tem como declarar tudo num só e chamar e passar parametro?

var auxText = {
  local: "Sexo"
}

var varText='Sexo';


//testar passagem de otherParam em onpress do Button
class  ChamaTextGeral extends React.Component {
  render() {
    return (
      <TextGeral
      indicadorText={varText}/>
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

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'HomeApp'),
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
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
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
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
        <Text>Cuidados</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <View style={styles.buttonStyle} >
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
        />
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
          title="Geral"
          onPress={() => this.props.navigation.navigate('TextMostraGeral')}
          color="#B665A0"
        />
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Cuidados: DetailsScreen,
    TextMostraAlimentos: ChamaTextAlimentos,
    TextMostraEstilo: ChamaTextEstiloVida,
    TextMostraAtividadeFisica: ChamaAtividadeFisica,
    TextMostraMassaCorporal: ChamaMassaCorporal,
    TextMostraSintomas: ChamaSintomas,
    TextMostraPrevencao: ChamaPrevencao,
    TextMostraGeral: ChamaTextGeral,
  },
  {
    initialRouteName: 'Home',
    // The header config from HomeScreen is now here
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

const App = createAppContainer(RootStack);
export default App;

