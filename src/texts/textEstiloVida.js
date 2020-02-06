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
            <Image style={{width: 200, height: 200}} source={require('../images/imagem2.jpg')}/>
            </View>
            
          <Text style={styles.textoTitulo}>Estilo de vida saudável </Text>
          <Text style={styles.textoSubtitulo}>Durante o climatério, é fundamental adotar um estilo 
          de vida saudável. Estas atitudes ajudam a diminuir os sintomas que podem alterar a sua 
          qualidade de vida nesse período (BRASIL, 2016):</Text>

          <Text style={styles.textoTitulo}>•	Pratique atividade física regularmente </Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../images/imagem3.jpg')}/>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../images/imagem4.jpg')}/>
            </View>
          
          <Text style={styles.textoTitulo}>Alguns cuidados para ter um sono saudável no climatério </Text>
          <Text style={styles.textoSubtitulo}>A necessidade de sono varia de uma pessoa para outra e muda com 
          a idade. Recomenda-se que adultos e pessoas com mais de 50 anos durmam de sete a oito horas por dia. 
          Siga estas recomendações para ter um sono de qualidade (BRASIL, 2019): </Text>
          
          <Text style={styles.textoSubtitulo}>• Acorde no mesmo horário nos sete dias da semana </Text>
          <Text style={styles.textoSubtitulo}>• Exponha- se à luz durante o dia </Text>
           <Text style={styles.textoSubtitulo}>• Faça exercícios físicos regularmente </ Text>
           <Text style={styles.textoSubtitulo}>• Evite cafeína à tarde e à noite </ Text>
           <Text style={styles.textoSubtitulo}>• Evite comidas e bebidas três horas antes de deita- se </Text>
            <Text style={styles.textoSubtitulo}>• Evite álcool à noite, pois seu uso aumenta o número de despertares noturnos </Text>
            <Text style={styles.textoSubtitulo}>• Fumantes devem evitar nicotina 4 a 6 horas antes de deitar-se </Text>
            <Text style={styles.textoSubtitulo}>• Ir para a cama com sono </Text>
            <Text style={styles.textoSubtitulo}>• Mantenha o quarto escuro e silencioso à noite</Text>
            <Text style={styles.textoSubtitulo}>• Se houver necessidade de levanta- se à noite, evite luzes brancas e azuis</Text>
            <Text style={styles.textoSubtitulo}>• Deixe o quarto para: evite livros, TV, celulares, tablets ou leitura de e- mails</Text>
        </View>
        </ScrollView>
      );
  }

  export default TextEstilo;