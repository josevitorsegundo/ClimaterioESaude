import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';

const TextSono = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textoTitulo}>• Adote cuidados para ter um sono saudável no climatério </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 200, height: 200}} source={require('../images/imagem8.jpg')}/>
          </View>

          <Text style={styles.textoSubtitulo}>A higiene do sono é a adoção de hábitos diários 
          que favorecem o equilíbrio entre as horas de sono e as horas em que se fica acordado, 
          a fim de ajudar o corpo a manter seu funcionamento adequado e diminuir o risco de 
          doenças. 
           </Text>
          
          <Text style={styles.textoTitulo}>Siga estas recomendações para ter um sono de 
          qualidade (BRASIL, 2019; VIGETA et al., 2013): </Text>
          
          <Text style={styles.textoSubtitulo}>•	Durma de sete a oito horas por dia; </Text>
          <Text style={styles.textoSubtitulo}>•	Estabeleça horário regular para dormir e acordar;</Text>
          <Text style={styles.textoSubtitulo}>•	Durma em ambiente adequado, mantendo o quarto 
          sem luminosidade, com temperatura agradável e sem ruídos;</Text>
           <Text style={styles.textoSubtitulo}>• Evite consumir substâncias estimulantes 
           (como cafeína, nicotina e álcool) entre quatro a seis horas antes de deitar; 
           </ Text>
           <Text style={styles.textoSubtitulo}>• Abstenha-se de fazer exercícios físicos intensos 
           até quatro horas antes do horário de dormir e não faça atividades físicas após às 18h;</ Text>
           <Text style={styles.textoSubtitulo}>• Terapias integrativas e complementares tais como: 
           acupuntura, ioga, dentre outras, ajudam na qualidade do sono; </Text>
            <Text style={styles.textoSubtitulo}>• Atividades agradáveis, como ouvir música ou 
            assistir TV, devem ser realizadas fora do quarto de dormir;</Text>
            <Text style={styles.textoSubtitulo}>• Faça a última refeição até às 20h, evitando alimentos 
            calóricos ou “pesados”; </Text>
        </View>
        </ScrollView>
      );
  }

  export default TextSono;