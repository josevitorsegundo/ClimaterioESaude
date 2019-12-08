import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';
//Alerta em linha 105 deixar em negrito
//expot em App e chamar tela no Button Cuidados




const TextSintomas = () => {
      return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textoSubtitulo}>No climatério algumas mulheres podem experimentar sintomas 
            (queixas) devido à queda nos níveis dos hormônios femininos nesse período. </Text>
            <Text style={styles.textoSubtitulo}>Nem todas as mulheres terão sintomas no período 
            pós-menopausa. Quando presentes, a intensidade e o tipo variam de uma mulher para outra.</Text>
            <Text style={styles.textoTitulo}>Sintomas passageiros</Text>
            <Text style={styles.textoSubtitulo}>Diminuição ou aumento do intervalo entre os ciclos menstruais, 
            aumento do número de dias de menstruação, ondas de calor, suores, calafrios, palpitações, dor de 
            cabeça, tontura, dormências no corpo, diminuição da autoestima, irritabilidade, dificuldade de 
            concentração e memória, dificuldades sexuais, rejeição do parceiro, diminuição do desejo sexual e 
            insônia (BRASIL, 2018). </Text>
            <Text style={styles.textoTitulo}>Sintomas permanentes</Text>
            <Text style={styles.textoSubtitulo}>Ressecamento e sangramento vaginal, dor durante as relações 
            sexuais, dor ao urinar, aumento do número de vezes que sente vontade de urinar, urgência urinária, 
            aumento nos níveis de gordura e açúcar do sangue (colesterol e triglicerídeos), diminuição das 
            gorduras ‘’boas’’ no sangue (colesterol HDL); fragilidade nos ossos (alterações na massa e estrutura 
            que são mais frequentes nos ossos da coluna e colo do fêmur (perna)), acúmulo de gordura na região do 
            abdome (barriga) (BRASIL, 2018).</Text>
            <Text style={styles.textoSubtitulo}>Reduza essas manifestações com a adoção de estilo de vida saudável, 
            prática de atividade física regular e alimentação adequada. </ Text>
            <Text style={styles.textoSubtitulo}>Saiba o que fazer para tratar alguns dos principais sintomas 
            passageiros e permanentes do climatério. </ Text>
            <Text style={styles.textoTitulo}>1-	Insônia</Text>
            <Text style={styles.textoSubtitulo}>É caracterizada quando ocorre dificuldade para adormecer ou 
            permanecer dormindo, no mínimo três vezes por semana, por pelo menos um mês. Algumas medidas 
            relacionadas a mudanças de comportamento são eficazes para o tratamento da insônia, não sendo 
            necessário uso de medicamentos.</Text>
            <Text style={styles.textoTitulo}>O que fazer?</Text>
            <Text style={styles.textoSubtitulo}>• Diminua a ingestão de líquidos antes da hora de dormir 
            para evitar muitas idas ao banheiro </ Text>
            <Text style={styles.textoSubtitulo}>• Deite-se para dormir apenas quando sentir sono </ Text>
            <Text style={styles.textoSubtitulo}>• Pratique atividades físicas em intervalo maior que quatro 
            horas antes do horário de dormir </ Text>
            <Text style={styles.textoSubtitulo}>• Deite-se e levante-se sempre nos mesmos horários todos os 
            dias da semana, independentemente da quantidade de sono que dormir à noite </ Text>
            <Text style={styles.textoSubtitulo}>• Evite cochilos, principalmente à tarde </ Text>
            <Text style={styles.textoSubtitulo}>• Escolha uma atividade prazerosa diária para a hora de 
            se deitar: ler, tomar banho morno, por exemplo </ Text>
            <Text style={styles.textoSubtitulo}>• Garanta que o quarto e a cama estejam confortáveis </ Text>
            <Text style={styles.textoSubtitulo}>• Não faça refeições ‘’pesadas’’ antes de se deitar  </ Text>
            <Text style={styles.textoSubtitulo}>• Se permanecer acordada por mais de 15 minutos após apagar 
            as luzes, levante-se e permaneça fora da cama até perceber que irá adormecer </ Text>
            <Text style={styles.textoSubtitulo}>• Respire de forma lenta e profunda por alguns minutos</ Text>
            <Text style={styles.textoSubtitulo}>• Evite o consumo de álcool, cafeína e fumo quatro a seis 
            horas antes de deitar</ Text>
            <Text style={styles.textoSubtitulo}>• Use o quarto apenas para dormir e sexo</ Text>
            <Text style={styles.textoSubtitulo}>• Evite estímulos negativos antes de dormir, tais como: 
            ruídos altos e luzes brilhantes, exposição a frio ou calor em excesso</ Text>
            <Text style={styles.textoSubtitulo}>• Não assista televisão e não faça refeições na cama</ Text>
            <Text style={styles.textoSubtitulo}>•	Use um diário para registrar pensamentos diários, pois 
            registrar preocupações antes de dormir pode ajudar a transferir esses pensamentos para o papel e 
            ‘’limpa’’ a mente tornando mais fácil o adormecer</ Text>
            <Text style={styles.textoSubtitulo}>•	Atividades como yoga, acupuntura, auriculoterapia, 
            massagem terapêutica, hipnose, meditação também podem auxiliar no reestabelecimento do padrão de sono 
            adequado (MANESS, 2015).</ Text>
            <Text style={styles.textoTitulo}>2-	Sintomas urogenitais: </ Text>
            <Text style={styles.textoSubtitulo}>Na pós- menopausa, a diminuição dos níveis do hormônio estrogênio 
            causa a  diminuição da força dos músculos de sustentação da bexiga e útero. As alterações nos tecidos 
            da vagina e sistema urinário  aumentam o risco de desenvolver infecções urinárias e perda de urina sem 
            controle (incontinência).</ Text>
            <Text style={styles.textoSubtitulo}>Devido à perda da elasticidade dos tecidos da vagina pode ocorrer 
            sangramento, dor, diminuição da lubrificação e dificuldade para chegar ao orgasmo durante as relações 
            sexuais (BRASIL, 2017; BRASIL, 2018).</ Text>
            <Text style={styles.textoTitulo}>O que fazer?</ Text>
            <Text style={styles.textoSubtitulo}>• Usar lubrificantes (a base de água) e hidratantes vaginais</ Text>
            <Text style={styles.textoSubtitulo}>• Aplicar estrogênios (cremes contendo hormônio) na vulva e vagina 
            (parte externa e interna da genitália feminina), conforme prescrição e orientação médica</ Text>
            <Text style={styles.textoSubtitulo}>• O laser vaginal e a radiofrequência são tratamentos que melhoram os 
            sintomas do ressecamento vaginal na pós- menopausa. São técnicas que causam microlesões através do calor 
            nas camadas superficiais da pele estimulando a produção de colágeno melhorando, assim, a elasticidade e 
            resistência dos tecidos da vagina. Estes tratamentos têm como limitações os custos elevados e a falta de 
            estudos suficientes avaliando os riscos e segurança de seu uso a longo prazo 
            (ARNOLD; HEHN; KLEIN, 2016; BRASIL, 2018).</ Text>
            <Text style={styles.textoTitulo}>3-	Fogachos e suores noturnos</ Text>
            <Text style={styles.textoSubtitulo}>Fogachos são ondas de calor que ocorrem na parte superior do corpo, 
            pescoço e rosto, acompanhado de vermelhidão na face, mãos quentes, suores e às vezes palpitações, dor de 
            cabeça e náusea. Este sintoma, quando presente, pode ter duração de três a cinco anos.</ Text>
            <Text style={styles.textoTitulo}>O que fazer?</ Text>
            <Text style={styles.textoSubtitulo}>• Durma em ambiente bem ventilado</ Text>
            <Text style={styles.textoSubtitulo}>• Use roupas que possam ser retiradas facilmente se perceber chegada 
            das ondas de calor</ Text>
            <Text style={styles.textoSubtitulo}>• Use tecidos que deixem a pele ‘’respirar’’</ Text>
            <Text style={styles.textoSubtitulo}>• Beba um copo de água ou suco quando perceber a chegada dos 
            sintomas</ Text>
            <Text style={styles.textoSubtitulo}>• Evite fumar e consumir bebidas alcoólicas e que contenham 
            cafeína</ Text>
            <Text style={styles.textoSubtitulo}>• Anote em um diário os momentos em que o fogacho se inicia 
            para que, dessa forma, possa tentar evitar situações-gatilho causadoras desse sintoma</ Text>
            <Text style={styles.textoSubtitulo}>• Pratique exercícios físicos</ Text>
            <Text style={styles.textoSubtitulo}>• Se estiver acima do peso, adote medidas para perder peso</ Text>
            <Text style={styles.textoSubtitulo}>• Respire lenta e profundamente por alguns minutos (BRASIL, 2016).</ Text>
            <Text style={styles.textoSubtitulo}>*Alerta*: Se os sintomas não reduzirem com estas medidas e estiverem 
            afetando seu bem-estar e sua qualidade de vida, procure auxílio em um serviço de saúde para que alternativas 
            de tratamento sejam adotadas. O médico também investigará possíveis doenças que tem suores como sintoma.</ Text>
            <Text style={styles.textoTitulo}>4-	Transtornos psicológicos no climatério</ Text>
            <Text style={styles.textoTitulo}>O que fazer?</ Text>
            <Text style={styles.textoSubtitulo}>Grande parte das mulheres atravessam o climatério de forma tranquila, 
            porém algumas apresentam sintomas depressivos nesta fase. As causas de depressão no climatério podem ser 
            devido à redução de hormônios, mas também podem ter como origem fatores sociais e conjugais da vida de cada 
            mulher. </ Text>
            <Text style={styles.textoSubtitulo}>• Evite situações que causem estresse (BRASIL, 2016).</ Text>
            <Text style={styles.textoSubtitulo}>• Faça atividades de lazer, trabalho, aprendizagem, de 
            convivência em grupo, troque experiências com outras mulheres, pois estas atividades proporcionam 
            momentos prazeros e colaboram para a vivência do climatério de forma mais positiva 
            (BRASIL, 2016).</ Text>
            <Text style={styles.textoSubtitulo}>• Procure ajuda médica caso sintomas de depressão (tristeza, desânimo, 
            falta de energia, cansaço, perda de prazer) e ansiedade sejam frequentes e de longa duração 
            (BRASIL, 2016).</ Text>
        </View>
        </ScrollView>
      );
  }

export default TextSintomas;