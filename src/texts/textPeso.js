import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';

const TextMassa = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textoTitulo}>Manutenção do peso normal: prevenindo sobrepeso e obesidade </Text>
          <Text style={styles.textoSubtitulo}>Durante o envelhecimento feminino ocorre redução do metabolismo. 
          No climatério o ganho de peso chega a 800 gramas por ano, podendo haver um aumento de 20% na gordura 
          corporal. Manter-se ativa ou em movimento colabora para a aceleração do metabolismo e diminue o ganho 
          de peso (BRASIL, 2010).</Text>
          <Text style={styles.textoSubtitulo}>Para saber se seu peso está adequado, clique aqui:</Text>
          <Text style={styles.textoSubtitulo}>Inserir peso e altura -- *Botão ou Caixa*</Text>
          <Text style={styles.textoSubtitulo}>**colocar calculadora para a mulher inserir seus dados e calcular 
          o IMC= PESO/ALTURA X ALTURA </Text>
          <Text style={styles.textoSubtitulo}>* ISERIR TABELA IMC DO ARQUIVO COMO IMAGEM. </Text>
           <Text style={styles.textoSubtitulo}>- A medida da circunferência abdominal (medida da cintura), 
           permite conhecer o risco de desenvolver doenças do coração e diabetes. </ Text>
           <Text style={styles.textoSubtitulo}>* Colocar figuras demonstrando como medir a circunferência 
           abdominal </ Text>
           <Text style={styles.textoSubtitulo}>INSERIR TABELA CIRCUNFERÊNCIA COMO IMAGEM</Text>
           <Text style={styles.textoSubtitulo}>• As mulheres acima do peso ( índice de massa corporal (IMC) 
           de 25 a 29,9 kg/m²), devem realizar um mínimo de 60 a 90 minutos de atividade física moderada, 
           preferencialmente todos os dias da semana (LEE, et al., 2017). </ Text>
           <Text style={styles.textoSubtitulo}>• Mulheres obesas devem realizar 300 minutos de atividade física 
           por semana para reduzir a gordura corporal total, (FRIEDENREICH, et al., 2015). </ Text>
        </View>
        </ScrollView>
      );
  }

export default TextMassa;