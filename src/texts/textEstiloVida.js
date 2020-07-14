import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';

const TextEstilo = () => {
      return (
        <ScrollView>
        
        <View style={styles.container}>
        
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/estiloVida1.jpg')}/>
            </View>
            
          <Text style={styles.textoSubtitulo}>Durante o climatério, é fundamental adotar um estilo de 
          vida saudável. Estas atitudes ajudam a diminuir os sintomas que podem alterar a sua qualidade 
          de vida nesse período (BRASIL, 2016):</Text>
          
        </View>
        </ScrollView>
      );
  }

  export default TextEstilo;