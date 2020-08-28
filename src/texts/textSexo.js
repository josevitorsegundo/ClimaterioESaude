import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextSexo = () => {
    return (
        <ScrollView>
        <View style={styles.container}>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/sexo1.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>A sexualidade e sensualidade não dependem da idade e 
            continuam fazendo parte da vida após a menopausa. Entretanto, nesse período, algumas 
            mulheres podem enfrentar transtornos, que são causados pela diminuição dos hormônios 
            femininos (BRASIL, 2018).</Text>
            <Text style={styles.textoSubtitulo}>Recomenda-se:</Text>
            <Text style={styles.textoSubtitulo}>• Usar lubrificantes vaginais à base de água, nas 
            relações sexuais, para diminuir os efeitos do ressecamento vaginal. Os lubrificantes 
            facilitam a penetração e a tornam mais prazerosa;</Text>
            <Text style={styles.textoSubtitulo}>• Buscar auxílio médico em caso de dor, ressecamento 
            não aliviado pelo uso de lubrificantes ou sangramento durante as relações sexuais, para que 
            sejam fornecidas outras opções de tratamentos para alívio desses sintomas;</Text>
            <Text style={styles.textoSubtitulo}>Há certas condições que podem interferir na vida 
            sexual, tais como: diabetes, colesterol alto, fumo, álcool, menopausa e alguns medicamentos. 
            Converse com um profissional de saúde.</ Text>
        </View>
        </ScrollView>
      );
  }

export default TextSexo;