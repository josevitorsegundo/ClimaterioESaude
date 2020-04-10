import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';

const TextAlimentos = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textoTitulo}>• Prefira alimentação saudável </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 200, height: 200}} source={require('../../assets/images/alimentos1.jpg')}/>
          </View>

          <Text style={styles.textoSubtitulo}>Adotar alimentação saudável durante toda a vida e 
          manter esse hábito no climatério pode diminuir o risco de adquirir doenças do coração, 
          diabetes, obesidade, osteoporose e demência.</Text>
          
          <Text style={styles.textoTitulo}>Conheça e siga os dez passos para uma alimentação 
          saudável</Text>
          
          <Text style={styles.textoSubtitulo}>Passo 1 - Faça dos alimentos in natura (naturais) a base 
          da sua alimentação: grãos, raízes, tubérculos, farinhas, legumes, verduras, frutas, castanhas, 
          leite, ovos e carnes, feijão, arroz, milho, batata, tomate, abóbora, laranja, banana, frango e 
          peixes;</Text>
          <Text style={styles.textoSubtitulo}>Passo 2 - Utilize óleos, gorduras, sal e açúcar em pequenas 
          quantidades ao temperar e cozinhar alimentos;</Text>
          <Text style={styles.textoSubtitulo}>Passo 3 - Limite o consumo de alimentos processados: 
          conservas de legumes, compotas de frutas, pães, queijos, por exemplo;</Text>
           <Text style={styles.textoSubtitulo}>Passo 4 - Evite o consumo de alimentos ultraprocessados, 
           como: biscoitos recheados, salgadinhos de pacote, refrigerantes ou macarrão instantâneo;</ Text>
           <Text style={styles.textoSubtitulo}>Passo 5 - Tenha atenção ao fazer uma refeição: alimente-se 
           em ambientes apropriados, e, sempre que possível, em companhia. Faça refeições em horários 
           semelhantes todos os dias e evite “beliscar” nos intervalos das refeições;</ Text>

           <Text style={styles.textoSubtitulo}>Passo 6 - Compre seus alimentos em locais que ofereçam 
           variedade de alimentos naturais ou minimamente processados. Sempre que possível, dê 
           preferência aos alimentos orgânicos, ou seja, aqueles produzidos de forma natural;</Text>
            <Text style={styles.textoSubtitulo}>Passo 7 - Desenvolva o hábito de cozinhar: pratique e 
            partilhe suas habilidades culinárias com outras pessoas;</Text>
            <Text style={styles.textoSubtitulo}>Passo 8 - Planeje seu tempo para dar à alimentação o 
            espaço que ela merece: organize sua despensa e defina com antecedência o cardápio da 
            semana;</Text>
            <Text style={styles.textoSubtitulo}>Passo 9 - Quando estiver fora de casa, prefira locais 
            que sirvam refeições feitas na hora. Fast-food, lanches rápidos ou sanduíches devem ser 
            evitados;</Text>
            <Text style={styles.textoSubtitulo}>Passo 10 - Seja crítico quanto às informações e 
            mensagens sobre alimentação veiculadas em propagandas comerciais (TV, internet, etc.).</Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 250, height: 200}} source={require('../../assets/images/alimentos2.png')}/>
            </View>

            <Text style={styles.textoSubtitulo}>ILUSTRAÇÃO: alimento in natura, alimento processado e 
            alimento ultraprocessado</Text>

        </View>
        </ScrollView>
      );
  }

  export default TextAlimentos;