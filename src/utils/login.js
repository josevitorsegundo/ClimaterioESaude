import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//import * as firebase from 'firebase';
import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  // ADD YOUR FIREBASE CREDENTIALS
  apiKey: "AIzaSyB946Z_pNHDzqbeISy1XDFeLEVFxe59dg4",
    authDomain: "climaterioesaude.firebaseapp.com",
    projectId: "climaterioesaude",
    storageBucket: "climaterioesaude.appspot.com",
    messagingSenderId: "580486005050",
    appId: "1:580486005050:web:9ee4aec1e3f66b8028d003"
};

firebase.initializeApp(firebaseConfig);

//import { Form, Input, Item, Label } from 'native-base'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  signUpUser = (email, password) => {

    try {

      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try {

      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
        console.log("Passou")

      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  async loginWithFacebook() {

    //ENTER YOUR APP ID 
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('<1:580486005050:web:9ee4aec1e3f66b8028d003>', { permissions: ['public_profile'] })

    if (type == 'success') {

      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text></Text>
          
        <Text>Email</Text>
        <TextInput
            placeholder="Seu e-mail"
            keyboardType="email-address"
            style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#9268D0'}}
            onChangeText={(email) => this.setState({ email })}
        />

        <Text>Senha</Text>
        <TextInput
            placeholder="Sua senha"
            keyboardType="visible-password"
            style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#9268D0'}}
            onChangeText={(password) => this.setState({ password })}
        />

        <Text></Text>

        <Button 
              title="Login" onPress={() => this.loginUser(this.state.email, this.state.password)}
              color="#9268D0"
        />

        <Text></Text>

        <Button 
              title="Criar conta" onPress={() => this.signUpUser(this.state.email, this.state.password)}
              color="#9268D0"
        />

      <Text></Text>

        {/*
        <Button 
              title="Login com Facebook" onPress={() => this.loginWithFacebook()}
              color="#9268D0"
        />*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
});

export default Login;