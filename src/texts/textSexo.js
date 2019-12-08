import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextSexo = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textoSubtitulo}>Durante o climatério algumas mulheres relatam piora e/ ou 
            diminuição /interrupção de suas práticas sexuais. São comuns sintomas como ressecamento vaginal, 
            coceira, irritação, ardência, sensação de pressão e dor durante a relação sexual. Também pode 
            ocorrer perda do desejo sexual e rejeição do parceiro (BRASIL, 2016). </Text>
            <Text style={styles.textoSubtitulo}>Recomenda-se:</Text>
            <Text style={styles.textoSubtitulo}>• Usar preservativos masculinos ou femininos </Text>
            <Text style={styles.textoSubtitulo}>• Usar lubrificantes vaginais a base de água nas relações 
            sexuais para diminuir os efeitos do ressecamento vaginal</Text>
            <Text style={styles.textoSubtitulo}>• Busque auxílio médico em caso de dor, ressecamento não 
            aliviado pelo uso de lubrificantes ou sangramento durante as relações sexuais, para que ele lhe 
            forneça outras opções de tratamentos existentes para alívio destes sintomas e também investigue a 
            existência de doenças que também apresentam sangramento vaginal </ Text>
        </View>
        </ScrollView>
      );
  }

export default TextSexo;