import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';

const TextTerapias = () => {
     

      return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textoTitulo}>Terapia hormonal (TH), medicina natural e práticas 
            complementares</Text>
            <Text style={styles.textoTitulo}>Terapia Hormonal (TH)</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/terapias1.jpg')}/>
            </View>
            
            <Text style={styles.textoSubtitulo}>A terapia hormonal (TH) é uma alternativa para alívio e 
            tratamento dos sintomas do climatério. No Brasil, a TH é oferecida através de medicamentos 
            via oral e, também, cremes e óvulos vaginais contendo hormônios. Esse tratamento deve ser 
            usado quando outras medidas não solucionarem as queixas da paciente e a intensidade dos 
            sintomas afetar sua qualidade de vida (BRASIL, 2016; BRASIL, 2018).</Text>

            <Text style={styles.textoSubtitulo}>Nem todas as mulheres precisarão se submeter à TH durante 
            o climatério. A TH é recomendada para aquelas menores de 60 anos e com menos de 
            10 anos de menopausa (última menstruação). A decisão pelo uso da TH deve ser conjunta entre 
            a paciente e seu médico, sempre avaliando os riscos e benefícios dessa opção de tratamento, 
            devendo ser usada pelo menor tempo possível e interrompida quando os sintomas melhorarem, 
            de acordo com orientação médica (BRASIL, 2018).</Text>

            <Text style={styles.textoTitulo}>Indicações e contra- indicações da Terapia Hormonal 
            (TH)</Text>

            <Text style={styles.textoSubtitulo}><Text style={{fontWeight: 'bold'}}>São indicações para TH: 
             </Text>fogachos moderados a severos, sintomas da atrofia urogenital (ressecamento), coceira, 
            dor durante as relações sexuais ou ao urinar, tratamento da menopausa precoce 
            (antes de 40 anos) e prevenção da osteoporose (BRASIL, 2010; BRASIL, 2016; BRASIL, 2018).</Text>

            <Text style={styles.textoSubtitulo}><Text style={{fontWeight: 'bold'}}>São contra-indicações 
            para uso da TH: </Text>mulheres com doença atual do fígado, câncer de mama ou lesões que 
            podem causar câncer de mama ou de endométrio (camada que reveste internamente o útero), 
            sangramento vaginal de causa desconhecida, trombose, doença das coronárias, lúpus, doenças 
            da circulação do cérebro, porfiria (doença sanguínea) (BRASIL, 2018).</Text>
           
            <Text style={styles.textoTitulo}>Efeitos colaterais da Terapia Hormonal (TH)</Text>
           
            <Text style={styles.textoSubtitulo}>O tratamento dos sintomas do climatério com hormônios 
            pode ocasionar efeitos adversos, variando de acordo com o tipo de hormônio utilizado e com 
            o organismo da paciente (BRASIL, 2016).</Text>

            <Text style={styles.textoSubtituloL}>•	TH com estrogênios: náuseas, distúrbios gastrintestinais 
            (se uso via oral), sensibilidade nas mamas, dor de cabeça, inchaço, possível estímulo a 
            miomas e endometriose;</Text>
            <Text style={styles.textoSubtituloL}>•	TH com progesterona: dor nas mamas, cólicas abdominais, 
            alterações do humor, fadiga, depressão, irritabilidade, alterações na pele, ganho de peso, 
            ansiedade e dores generalizadas.</Text>
            
            <Text style={styles.textoTitulo}>Medicina natural e práticas complementares</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/terapias2.jpg')}/>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/terapias3.jpg')}/>
            </View>
            
            <Text style={styles.textoSubtitulo}>As práticas integrativas complementares (PIC), associadas 
            a hábitos de vida saudáveis, ajudam às mulheres a conviver com sintomas do climatério sem 
            necessidade de usar hormônios (VIGETA; BRÊTAS, 2004).</Text>
            <Text style={styles.textoSubtitulo}>As PIC são terapias individuais ou em grupo, que usam 
            recursos da medicina tradicional, incluindo práticas corporais e mentais, orientações 
            alimentares e plantas medicinais para tratar e prevenir doenças (BRASIL, 2018). Essas terapias 
            possuem baixo custo e são tratamentos alternativos à terapia com hormônios, especialmente para 
            a mulheres que possuem contraindicações para seu uso (LEÃO et al., 2015).</Text>
            <Text style={styles.textoSubtitulo}>São exemplos de terapias complementares: acupuntura, tai 
            chi chuan, lian gong, chi gong, tuina, homeopatia, fitoterápicos, auriculoterapia, toque 
            terapêutico, terapia floral, meditação, automassagem, dentre outros 
            (LEÃO et al., 2015; BRASIL, 2018; SOUSA et al., 2018).</Text>
            <Text style={styles.textoSubtitulo}>Atualmente, essas terapias são disponibilizadas no SUS e 
            também em serviços privados. Informe-se para saber se em sua unidade de saúde ou em seu 
            município são oferecidos alguns destes tratamentos (BRASIL, 2016; BRASIL, 2018; SOUSA et al., 
            2018; SHUFELT, DUTRA, RAMINENI, 2019).</Text>

            <Text style={styles.textoSubtitulo}>Conheça algumas terapias complementares que podem reduzir 
            os sintomas do climatério:</Text>
            <Text style={styles.textoSubtitulo}>•	Acupuntura: terapia na qual são inseridas agulhas para 
            estimular pontos do corpo com objetivo de prevenir e tratar doenças;</Text>
            <Text style={styles.textoSubtitulo}>•	Homeopatia: prática que compreende o indivíduo em seus 
            aspectos físico, psicológico e social. Nos tratamentos homeopáticos há uso reduzido de 
            medicamentos;</Text>
            <Text style={styles.textoSubtitulo}>•	Meditação, ioga e alongamento auxiliam na redução do 
            stress e sintomas climatéricos;</Text>
            <Text style={styles.textoSubtitulo}>•	Terapias com florais: é o uso de essências de flores 
            para o equilíbrio das emoções;</Text>
            
            <Text style={styles.textoSubtitulo}>Terapias com florais: é o uso de essências de flores 
            para o equilíbrio das emoções; Meditação, ioga e alongamento auxiliam na redução do stress e 
            sintomas climatéricos;</Text>
            <Text style={styles.textoSubtitulo}>Fitoterapia: são tratamentos à base de plantas 
            medicinais. Conheça alguns fitoterápicos que podem ser usadas no climatério;</Text>
           
            <Text style={styles.textoSubtitulo}>Produtos contendo isoflavonas: soja e derivados, 
            amendoim, trifolium (pratense L.) ou trevo vermelho (redclover), kudzu (Puerarialobata), 
            hipérico (Hipericoperforatum); valeriana (Valeriana officinalis), melissa 
            (Melissa officinalis), passiflora, valeriana e avenna sativa (aveia) são usadas para alívio 
            da ansiedade e insônia.                                                     <Text style={styles.textoQL}>'</Text></Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/terapias4.jpg')}/>
            <Text> </Text>
            </View>
        </View>
        </ScrollView>
      );
  }

export default TextTerapias;