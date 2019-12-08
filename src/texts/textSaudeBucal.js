import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextSaudeBucal = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textoSubtitulo}>No climatério as mulheres ficam vulneráveis a doenças que 
            podem levar à perda de dentes, como é o caso da osteoporose e doença periodontal. Para evitar 
            estes problemas, tenha os seguintes cuidados: </Text>
            <Text style={styles.textoSubtitulo}>• Higienize os dentes, língua, próteses e gengiva com fio 
            dental e escova macia</Text>
            <Text style={styles.textoSubtitulo}>• Se apresentar secura na boca, use hidratantes bucais </Text>
            <Text style={styles.textoSubtitulo}>• Beba água e bebidas sem açúcar com frequência</Text>
            <Text style={styles.textoSubtitulo}>• Masque goma (chiclete) para estimular a produção de 
            saliva </ Text>
            <Text style={styles.textoSubtitulo}>• Evite fumo e bebidas alcoólicas </ Text>
            <Text style={styles.textoSubtitulo}>• Evite alimentos salgados ou condimentados</Text>
            <Text style={styles.textoSubtitulo}>• Se usar prótese observe se está bem adaptada e 
            com todas as partes íntegras</Text>
            <Text style={styles.textoSubtitulo}>• Se não tiver dentes, higienize a gengiva com fralda 
            umedecida (BRASIL, 2008). </ Text>
        </View>
        </ScrollView>
      );
  }

export default TextSaudeBucal;