import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class welcome extends Component {
  render(){
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
        <Text style={styles.texto2}>Open up App.js to start working on your app!</Text>
    </View>
  );
  }
}