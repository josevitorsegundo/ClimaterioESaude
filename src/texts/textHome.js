import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextHome = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.textoTitulo}>O que é climatério? </Text>
            <Text style={styles.textoSubtitulo}>O climatério é a passagem da fase reprodutiva para a não 
            reprodutiva e acontece normalmente entre os 40 e 65 anos. É um período natural que faz parte do 
            envelhecimento da mulher trazendo mudanças no corpo, nos aspectos psicológicos e sociais 
            (BRASIL, 2016). </Text>
            <Text style={styles.textoTitulo}>O que é menopausa? </Text>
            <Text style={styles.textoSubtitulo}>A menopausa é a última menstruação e ocorre em média entre os 
            48 e 50 anos, sendo estabelecida quando a mulher fica 12 meses seguidos sem menstruações 
            (BRASIL, 2016). </Text>
            <Text style={styles.textoSubtitulo}>Cirurgias ginecológicas e tratamentos médicos como o de câncer 
            de mama são situações que também levam à menopausa (BRASIL, 2010). </Text>
            <Text style={styles.textoTitulo}>Mudanças físicas, psicológicas e sociais no climatério </Text>
            <Text style={styles.textoSubtitulo}>Com a diminuição dos hormônios femininos (estrogênio e 
            progesterona), as mulheres passam por mudanças biológicas, psicológicas e sociais que afetam seu 
            modo de viver.</Text>
            <Text style={styles.textoSubtitulo}>Como nas demais fases da vida, o climatério pode ser vivido 
            de forma saudável, produtiva e feliz a partir da adoção de estilo de vida saudável e da decisão de 
            ver essa fase da vida de forma positiva, resignificando esse momento (BRASIL, 2016).  </ Text>
        </View>
        </ScrollView>
      );
  }

export default TextHome;