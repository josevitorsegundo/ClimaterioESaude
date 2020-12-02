import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextLembretes = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            
            {/*
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/Lembretes1.jpg')}/>
            </View>
            
            */}

            <Text style={styles.textoTitulo}>Mamografia e Papanicolau:</Text>
            <Text style={styles.textoSubtitulo}>• ***</Text>
            <Text style={styles.textoTitulo}>Medicamentos:</Text>
            <Text style={styles.textoSubtitulo}>• ***</ Text>
        </View>
        </ScrollView>
      );
  }

export default TextLembretes;