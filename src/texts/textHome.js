import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextHome = () => {
    var {height, width} = Dimensions.get('window')
    return (
        <ScrollView>
            
        <View style={styles.container + { height: height, width: width }}>
        
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
           
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            
            <Image style={{width: 100, height: 100}} source={require('../images/alimentos2.png')}/>
            <Text style = {styles.textoLegenda}>FIGURA: Representação gráfica de alimentos in natura, alimentos processados 
                    e alimentos ultra processados, (Fonte: BRASIL, 2014)</Text>
            </View>

        </View>
        </ScrollView>
      );
  }

export default TextHome;