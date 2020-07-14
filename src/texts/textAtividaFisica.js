import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';

const TextAtividadeFisica = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textoTitulo}><Text style={styles.textoTitulo}>•	Pratique atividade física 
          regularmente </Text> </Text>
          
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/atvFisica1.jpg')}/>
          </View>
          
          <Text style={styles.textoSubtitulo}>A prática de atividade física é eficiente para manter a 
          saúde física e mental. Seus benefícios refletem na manutenção das taxas de gorduras do sangue e 
          têm efeito protetor sobre a função do coração e da circulação. Os exercícios físicos também 
          atuam na prevenção da obesidade, da osteoporose, da fraqueza muscular; além de reduzir os níveis 
          de estresse e sintomas da menopausa, incluindo as ondas de calor. Além disso, o exercício físico 
          libera endorfina, que é o hormônio que causa sensação de bem-estar, e outras substâncias que 
          contribuem para reduzir o apetite 
          (BRASIL, 2010; BRASIL, 2016; BRASIL, 2008; CANADÁ, 2019; SOGESP, 2019).</Text>
          
          <Text style={styles.textoSubtitulo}>•	Pratique exercícios de acordo sua capacidade física e, aos 
          poucos, aumente sua intensidade (LEE et al., 2017); </Text>
          <Text style={styles.textoSubtitulo}>• Recomenda-se, em média, 150 minutos de atividade 
          aeróbica moderada por semana (caminhada, corrida, dança, hidroginástica, andar de bicicleta, 
          subir escadas, pular corda, dentre outras). Pode ser incluído o tempo gasto em atividades de 
          trabalho ou lazer desde que ao menos 10 minutos sejam de atividade contínua ou seja, sem 
          interrupção. A atividade é considerada moderada quando a respiração fica acelerada e ofegante, 
          porém consegue-se falar sem dificuldade (BRASIL, 2017: BRASIL, 2016);</Text>
          
          <Text style={styles.textoSubtitulo}>•	Realize, diariamente ou sempre que possível, atividade 
          de lazer, relaxamento, coordenação motora, manutenção do equilíbrio e outras que envolvam 
          contato com pessoas: dança, caminhada, corrida, musculação, tai chi chuan e ioga 
          (LEE et al., 2017);</Text>
          <Text style={styles.textoSubtitulo}>•	Aparelhos usados para contar passos, 
          conhecidos como pedômetros, podem ser usados para indicar seu nível de atividade, cuja meta diária recomendada é 
          de seis a sete mil passos (HERON et al., 2014).</Text>
        </View>
        </ScrollView>
      );
  }

  export default TextAtividadeFisica;