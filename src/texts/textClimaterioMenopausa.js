import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextClimaterioMenopausa = () => {
    var {height, width} = Dimensions.get('window')
    return (
        <ScrollView>
            
        <View style={styles.container + { height: height, width: width }}>
        
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/climaterio1.jpg')}/>
        </View>

        <Text style={styles.textoTitulo}>O que é climatério? </Text>
            <Text style={styles.textoSubtitulo}>O climatério é a passagem da fase reprodutiva para a não 
            reprodutiva, normalmente acontece entre os 40 e 65 anos. É um período natural que faz parte 
            do envelhecimento da mulher, trazendo mudanças no corpo, nos aspectos psicológicos e 
            sociais (BRASIL, 2016). </Text>
            
            <Text style={styles.textoTitulo}>O que é menopausa? </Text>
            <Text style={styles.textoSubtitulo}>A menopausa é a última menstruação e ocorre, em média, 
            entre os 48 e 50 anos, sendo estabelecida quando a mulher fica 12 meses seguidos sem 
            menstruar (Brasil, 2016). </Text>
            <Text style={styles.textoSubtitulo}>A menopausa pode ser induzida por tratamento cirúrgico, 
            no qual ocorre a retirada dos dois ovários, ou por tratamentos que causem a perda das suas 
            funções, como a quimioterapia e a radioterapia (OMS, 1996).</Text>
            
            <Text style={styles.textoTitulo}>Mudanças físicas, psicológicas e sociais no 
            climatério </Text>
            <Text style={styles.textoSubtitulo}>Com a diminuição dos hormônios femininos 
            (estrogênio e progesterona), as mulheres passam por mudanças biológicas, psicológicas e 
            sociais que afetam seu modo de viver.</Text>
            <Text style={styles.textoSubtitulo}>Como nas demais fases da vida, o climatério pode ser 
            vivido de forma saudável, produtiva e feliz, a partir da adoção de estilo de vida saudável e 
            da decisão de vivenciá-lo de modo positivo e natural (BRASIL, 2016; SOGESP, 2019).</ Text>

        </View>
        </ScrollView>
      );
  }

export default TextClimaterioMenopausa;