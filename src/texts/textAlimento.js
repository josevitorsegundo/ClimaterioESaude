import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';

const TextAlimentos = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textoTitulo}>Alimentação saudável no climatério </Text>
          <Text style={styles.textoSubtitulo}>Pode-se reduzir o risco de adquirir doenças cardíacas,
           diabetes, obesidade, osteoporose e demência caso tenha uma alimentação saudável durante o
            climatério (HARVIE; HOWELL; EVANS, 2015).</Text>
          <Text style={styles.textoTitulo}>Conheça e siga os dez passos para uma alimentação saudável 
          (BRASIL, 2014) </Text>
          <Text style={styles.textoSubtitulo}>Passo 1 - Faça dos alimentos in natura (naturais) a 
          base da alimentação: grãos, raízes, tubérculos, farinhas, legumes, verduras, frutas, castanhas,
           leite, ovos e carnes, feijão, arroz, milho, batata, tomate, abóbora, laranja, banana, frango e
            frango </Text>
          <Text style={styles.textoSubtitulo}>Passo 2- Utilize, óleos, gorduras, sal e açúcar em pequenas 
          quantidades ao temperar e cozinhar alimentos </Text>
          <Text style={styles.textoSubtitulo}>Passo 3- Limite o consumo de alimentos processados: conserva
           de legumes, compotas de frutas, pães, queijos </Text>
           <Text style={styles.textoSubtitulo}>Passo 4- Evite o consumo de alimentos ultra- processados: 
           biscoito recheados, salgadinhos de pacote, refrigerantes, macarrão instantâneo </ Text>
           <Text style={styles.textoSubtitulo}>Passo 5- Tenha atenção ao fazer uma refeição, alimente-se em 
           ambientes apropriados, e, sempre que possível, em companhia. Faça refeições em horários semelhantes 
           todos os dias e evitar “beliscar” nos intervalos das refeições </ Text>
           <Text style={styles.textoSubtitulo}>Passo 6- Compre seus alimentos em locais que ofereçam variedades
            de alimentos naturais ou minimamente processados. Sempre que possível prefira alimentos orgânicos 
            (produzidos de forma natural) </Text>
            <Text style={styles.textoSubtitulo}>Passo 7- Desenvolva o hábito de cozinhar, pratique e partilhe 
            suas habilidades culinárias com outras pessoas </Text>
            <Text style={styles.textoSubtitulo}>Passo 8- Planeje seu tempo para dar à alimentação o espaço que
             ela merece. Organize a despensa doméstica e defina com antecedência o cardápio da semana </Text>
            <Text style={styles.textoSubtitulo}>Passo 9- Quando fora de casa, prefira locais que servem 
            refeições feitas na hora. Evite fast- food (lanches rápidos, sanduíches) </Text>
            <Text style={styles.textoSubtitulo}>Passo 10- Seja crítico quanto à informações e mensagens 
              sobre alimentação veiculadas em propagandas comerciais (TV, internet, etc.)</Text>
            <Text style={styles.textoSubtitulo}>INSERIR IMAGEM DE REPRESENTAÇÃO GRÁFICA DE ALIMENTOS IN 
            NATURA</Text>
        </View>
        </ScrollView>
      );
  }

  export default TextAlimentos;