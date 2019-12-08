import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';

const TextAtividadeFisica = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textoTitulo}>Por que praticar exercícios físicos no climatério? </Text>
          <Text style={styles.textoSubtitulo}>A prática de atividade física é eficiente para manter a saúde 
          física e mental. Seus benefícios refletem na manutenção das taxas de gorduras do sangue, tem efeito 
          protetor para a função do coração e circulação, previne obesidade, osteoporose, fraqueza muscular e 
          ainda reduz os níveis de estresse e sintomas da menopausa, incluindo as ondas de calor 
          (BRASIL, 2010; BRASIL, 2016; BRASIL, 2008; CANADÁ, 2019).</Text>
          <Text style={styles.textoSubtitulo}>• Pratique exercícios de acordo sua capacidade física e aumente 
          a intensidade aos poucos (LEE et al., 2017). </Text>
          <Text style={styles.textoSubtitulo}>• Pratique 150 minutos de atividade aeróbica moderada por semana 
          durante o trabalho ou lazer sendo ao menos 10 minutos de atividade física contínua por período 
          (BRASIL, 2016). </Text>
          <Text style={styles.textoSubtitulo}>*São atividades aeróbicas: caminhada, corrida, dança, 
          hidroginástica, andar de bicicleta, subir escadas, pular corda, dentre outras </Text>
          <Text style={styles.textoSubtitulo}>* A atividade é moderada quando a respiração fica acelerada e 
          ofegante, porém consegue-se falar sem dificuldade. Na atividade física intensa a respiração fica 
          muito ofegante e a fala dificultada, (BRASIL, 2017). </Text>
           <Text style={styles.textoSubtitulo}>(COLOCAR FIGURAS) </ Text>
           <Text style={styles.textoSubtitulo}>• Realize diariamente ou sempre que possível, atividade de 
           lazer, relaxamento, coordenação motora, manutenção do equilíbrio e outras que envolvam contato com  
           pessoas: dança, caminhada, corrida, musculação, tai- chi e yoga (LEE et al., 2017). </ Text>
           <Text style={styles.textoSubtitulo}>• Aparelhos usados para contar passos (pedômetros) podem ser 
           usados para indicar seu nível de atividade diariamente (a meta diária recomendada é de 6 a 7 mil 
           passos) (HERON,  2014). </Text>
        </View>
        </ScrollView>
      );
  }

  export default TextAtividadeFisica;