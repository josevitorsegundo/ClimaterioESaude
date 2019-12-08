import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';
// negritos entre aspas linhas: 18,  
//expot em App e chamar tela no Button Cuidados

const TextTerapias = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textoTitulo}>-Terapia Hormonal (TH)</Text>
            <Text style={styles.textoSubtitulo}>A decisão pelo uso da TH deve ser conjunta entre a mulher 
            e seu médico sempre avaliando os riscos e benefícios dessa opção de tratamento. Deve ser usado 
            pelo menor tempo possível e interrompido quando os sintomas do climatério tiverem melhorado, de 
            acordo com orientação médica.</Text>
            <Text style={styles.textoTitulo}>Indicações e contra- indicações da Terapia Hormonal (TH) </Text>
            <Text style={styles.textoSubtitulo}>*São indicações para TH*: fogachos moderados a severos, sintomas 
            da atrofia urogenital (ressecamento, coceira, dor nas relações sexuais, dor ao urinar, tratamento 
            da menopausa precoce (antes de 40 anos) e prevenção da osteoporose (BRASIL, 2018).</Text>
            <Text style={styles.textoSubtitulo}>São contra- indicações para uso da TH:  mulheres com doença do 
            fígado atual, câncer de mama ou lesões que podem causar câncer de mama, câncer de endométrio 
            (camada que reveste internamente o útero), sangramento vaginal de causa desconhecida, trombose, 
            doença das coronárias, lúpus, doenças da circulação do cérebro, porfiria (doença sanguínea) 
            (BRASIL, 2018). </ Text>
            <Text style={styles.textoSubtitulo}>• A TH é recomendada para mulheres com menos de 60 anos e 
            menos de 10 anos de menopausa (última menstruação)</Text>
            <Text style={styles.textoSubtitulo}>• No Brasil, a TH é oferecida através de medicamentos 
            via oral e também através de cremes e óvulos vaginais (BRASIL, 2018; BRASIL, 2016)</Text>
            <Text style={styles.textoSubtitulo}>• Outros benefícios da TH: melhora nos distúrbios do humor e do 
            sono; prevenção do diabetes tipo 2, demência, doenças cardiovasculares e melhora da qualidade de vida 
            (BRASIL, 2018).</Text>
            <Text style={styles.textoTitulo}>Efeitos colaterais da Terapia Hormonal (TH)</Text>
            <Text style={styles.textoSubtitulo}>O tratamento dos sintomas do climatério com hormônios pode ocasionar 
            efeitos adversos, variando de acordo com o tipo de hormônio utilizado e com o organismo da paciente 
            (BRASIL, 2016).</Text>
            <Text style={styles.textoSubtitulo}>• TH com estrogênios: náuseas, distúrbios gastrintestinais (se uso 
            via oral), sensibilidade nas mamas, dor de cabeça, inchaço, possível estímulo a leiomiomas no útero e 
            endometriose.</Text>
            <Text style={styles.textoSubtitulo}>• TH com progestágenos: dor nas mamas, cólicas abdominais, alterações 
            do humor, fadiga, depressão, irritabilidade, alterações na pele, ganho de peso, ansiedade e dores 
            generalizadas.</Text>
            <Text style={styles.textoTitulo}>-Medicina natural e práticas complementares</Text>
            <Text style={styles.textoSubtitulo}>Alguns tratamentos e terapias alternativas podem ser usados 
            para a melhoria das queixas do climatério. Estes tratamentos devem ser sempre orientados/realizados 
            por profissional capacitado. </Text>
            <Text style={styles.textoSubtitulo}>É importante saber que medicações fitoterápicas podem ter 
            contraindicações e efeitos colaterais, devendo ser utilizadas conforme orientação médica.</Text>
            <Text style={styles.textoSubtitulo}>Algumas terapias não farmacológicas podem reduzir os sintomas 
            climatéricos:</Text>
            <Text style={styles.textoSubtitulo}>• Acupuntura</Text>
            <Text style={styles.textoSubtitulo}>• Meditação, yoga e alongamento auxiliam na redução do stress e 
            sintomas climatéricos (SHUFELT; DUTRA; RAMINENI, 2019)</Text>
            <Text style={styles.textoSubtitulo}>• Fitoterápicos: produtos contendo isoflavonas: soja e derivados, 
            amendoim, Trifolium pratense L. ou trevo vermelho (red clover), kudzu (Pueraria lobata,) podem ser 
            utilizados para reduzir os sintomas do climatério (BRASIL, 2018)</Text>
            <Text style={styles.textoSubtitulo}>• Hipérico (Hipericoperforatum), Valeriana (Valeriana officinalis), 
            Melissa (Melissa officinalis), são usadas para alívio da ansiedade e insônia (BRASIL, 2016).</Text>
        </View>
        </ScrollView>
      );
  }

export default TextTerapias;