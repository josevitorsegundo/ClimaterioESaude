import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';
//Alerta em linha 105 deixar em negrito
//expot em App e chamar tela no Button Cuidados




const TextSintomas = () => {
      return (
        <ScrollView>
        <View style={styles.container}>

            <Text style={styles.textoTitulo}>Principais queixas do climatério</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/sintomas1.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Nem todas as mulheres terão sintomas no período 
            pós-menopausa: algumas apresentarão sintomas desagradáveis, enquanto outras podem ter pouco 
            ou nenhum sintoma.</Text>
            
            <Text style={styles.textoTitulo}>Sintomas passageiros</Text>

            <Text style={styles.textoSubtitulo}>Sintomas que serão sentidos de forma passageira: 
            diminuição ou aumento do intervalo entre os ciclos menstruais, aumento do número de dias de 
            menstruação, ondas de calor, suores, calafrios, palpitações, dor de cabeça, tontura, 
            dormências no corpo, diminuição da autoestima, irritabilidade, dificuldade de concentração e 
            memória, dificuldades sexuais, rejeição do parceiro, diminuição do desejo sexual e 
            insônia.</Text>

            <Text style={styles.textoTitulo}>Sintomas permanentes</Text>
            <Text style={styles.textoSubtitulo}>Os sintomas permanentes consistem em: ressecamento e 
            sangramento vaginal; dor durante as relações sexuais; dor ao urinar e aumento do número de 
            vezes que sente vontade de urinar; necessidade urgente de urinar; aumento nos níveis de 
            gordura e açúcar do sangue (colesterol e triglicerídeos); diminuição das gorduras ”boas” no 
            sangue (colesterol HDL); fragilidade nos ossos (principalmente nos ossos da coluna e colo do 
            fêmur - perna); e acúmulo de gordura na região do abdome (barriga).</Text>

            <Text style={styles.textoSubtitulo}>Saiba o que fazer para tratar alguns dos principais 
            sintomas passageiros e permanentes do climatério.</ Text>

            <Text style={styles.textoTitulo}>1-	Insônia</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/sintomas2.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>A insônia acontece quando ocorre dificuldade para 
            adormecer ou permanecer dormindo, no mínimo, três vezes por semana, por, pelo menos, um mês. 
            Existem medidas relacionadas às mudanças de comportamento que são eficazes para o tratamento 
            da insônia, não sendo necessário, na maioria das vezes, o uso de medicamentos.</Text>
            
            <Text style={styles.textoTitulo}>O que fazer?</Text>

            <Text style={styles.textoSubtitulo}>•	Diminua a ingestão de líquidos antes da hora de dormir 
            para evitar muitas idas ao banheiro;</ Text>
            <Text style={styles.textoSubtitulo}>•	Deite-se para dormir apenas quando sentir sono;</ Text>
            <Text style={styles.textoSubtitulo}>•	Pratique atividades físicas em intervalo maior que 
            quatro horas antes do horário de dormir;</ Text>
            <Text style={styles.textoSubtitulo}>•	Deite e levante sempre nos mesmos horários todos os 
            dias, independentemente da quantidade de horas que dormir à noite;</ Text>
            <Text style={styles.textoSubtitulo}>•	Escolha uma atividade prazerosa para a hora de se 
            deitar: ler, tomar banho morno, por exemplo;</ Text>
            <Text style={styles.textoSubtitulo}>•	Evite cochilos, principalmente à tarde;</ Text>
            <Text style={styles.textoSubtitulo}>•	Garanta que o quarto e a cama estejam 
            confortáveis;</ Text>
            <Text style={styles.textoSubtitulo}>•	Não faça refeições “pesadas” antes de deitar;</ Text>
            <Text style={styles.textoSubtitulo}>•	Se permanecer acordada por mais de 15 minutos após 
            apagar as luzes, levante e permaneça fora da cama até perceber que irá adormecer;</ Text>
            <Text style={styles.textoSubtitulo}>•	Respire de forma lenta e profunda por alguns 
            minutos;</ Text>
            <Text style={styles.textoSubtitulo}>•	Evite o consumo de álcool, cafeína e fumo entre 
            quatro e seis horas antes de deitar;</ Text>
            <Text style={styles.textoSubtitulo}>•	Use o quarto apenas para dormir e sexo;</ Text>
            <Text style={styles.textoSubtitulo}>•	Evite estímulos negativos antes de dormir, tais como: 
            ruídos altos e luzes brilhantes (celular, computador, etc.), exposição a frio ou calor em 
            excesso;</ Text>
            <Text style={styles.textoSubtitulo}>• Não assista televisão e não faça refeições na 
            cama;</ Text>
            <Text style={styles.textoSubtitulo}>•	Use um diário para registrar pensamentos e preocupações 
            antes de dormir, pois registrar essas preocupações pode ajudar a “limpar” a mente, 
            facilitando o adormecer;</ Text>
            <Text style={styles.textoSubtitulo}>•	Evite usar benzodiazepínicos (soníferos), pois esses 
            medicamentos causam dependência e não são indicados para a insônia comum no climatério;</Text>
            <Text style={styles.textoSubtitulo}>•	Use calmantes naturais (fitoterápicos) como as ervas 
            passiflora (flor de maracujá), valeriana, melissa (erva- cidreira) e aveia.</ Text>
            <Text style={styles.textoSubtitulo}>•	Ioga, acupuntura, auriculoterapia, massagem 
            terapêutica, hipnose e meditação são recomendadas, pois podem auxiliar no restabelecimento do 
            padrão de sono adequado.</ Text>
            
            <Text style={styles.textoTitulo}>2- Sintomas relacionados aos órgãos urinários e 
            genitais</ Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/sintomas3.jpg')}/>
            </View>
            
            <Text style={styles.textoSubtitulo}>Na pós-menopausa, a queda dos níveis do hormônio 
            estrogênio causa a diminuição da força dos músculos que sustentam a bexiga e o útero. 
            As alterações nos tecidos da vagina e sistema urinário aumentam o risco de desenvolver 
            infecções urinárias e de perda de urina sem controle (incontinência).</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/sintomas4.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Devido à perda da elasticidade dos tecidos da vagina, 
            pode ocorrer sangramento, dor, diminuição da lubrificação e dificuldade para chegar ao 
            orgasmo durante as relações sexuais.</ Text>

            <Text style={styles.textoTitulo}>O que fazer?</ Text>

            <Text style={styles.textoSubtitulo}>•	Usar lubrificantes (a base de água) e hidratantes 
            vaginais;</ Text>
            <Text style={styles.textoSubtitulo}>•	Aplicar estrogênios (cremes contendo hormônio) na 
            vulva e vagina (partes externa e interna da genitália feminina, respectivamente), conforme 
            prescrição e orientação médica;</ Text>
            <Text style={styles.textoSubtitulo}>•	O laser vaginal e a radiofrequência são tratamentos 
            que melhoram os sintomas do ressecamento vaginal na pós-menopausa. São técnicas que causam 
            pequenas lesões, através do calor nas camadas superficiais da pele, estimulando a produção 
            de colágeno e melhorando a elasticidade e a resistência dos tecidos da vagina.</ Text>

            <Text style={styles.textoTitulo}>3-	Fogachos e suores noturnos 
            (“calorões”)</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/sintomas5.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Fogachos são ondas de calor que ocorrem na parte superior 
            do corpo, pescoço e rosto, acompanhado de: vermelhidão na face, mãos quentes, suores e, 
            às vezes, palpitações, dor de cabeça e náusea. O período de duração dos fogachos varia de 
            três a cinco anos.</ Text>

            <Text style={styles.textoTitulo}>O que fazer?</ Text>

            <Text style={styles.textoSubtitulo}>•	Durma em ambiente bem ventilado;</ Text>
            <Text style={styles.textoSubtitulo}>•	Use roupas que possam ser retiradas 
            facilmente, se perceber a chegada das ondas de calor;</ Text>
            <Text style={styles.textoSubtitulo}>•	Use tecidos que deixem a pele “respirar”;</ Text>
            <Text style={styles.textoSubtitulo}>•	Beba um copo de água ou suco quando perceber a 
            chegada dos sintomas;</ Text>
            <Text style={styles.textoSubtitulo}>•	Evite fumar, consumir bebidas alcoólicas ou que contenham 
            cafeína;</ Text>
            <Text style={styles.textoSubtitulo}>•	Anote, no diário do aplicativo, os momentos em que o 
            fogacho se inicia para que, dessa forma, possa tentar evitar situações-gatilho causadoras 
            desse sintoma;</ Text>
            <Text style={styles.textoSubtitulo}>•	Pratique exercícios físicos;</ Text>
            <Text style={styles.textoSubtitulo}>•	Se estiver acima do peso, adote medidas para perder o 
            excesso;</ Text>
            <Text style={styles.textoSubtitulo}>•	Respire lenta e profundamente por alguns minutos para 
            acalmar-se.</ Text>

            <Text style={styles.textoSubtitulo}><Text style={{fontWeight: 'bold'}}>Alerta: </Text>
            Se os sintomas não reduzirem com estas medidas e estiverem afetando seu bem-estar e sua 
            qualidade de vida, procure auxílio em um serviço de saúde para que alternativas de tratamento 
            sejam adotadas. O médico também investigará possíveis doenças que têm suores como 
            sintoma.</ Text>
            
            <Text style={styles.textoTitulo}>4-	Transtornos psicológicos no climatério</ Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/sintomas6.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Grande parte das mulheres atravessa o climatério de 
            forma tranquila, porém algumas apresentam sintomas depressivos nesta fase. As causas de 
            depressão no climatério podem ser devidas à redução de hormônios, mas também podem ter 
            como origem fatores sociais e/ou conjugais da vida de cada uma.</ Text>

            <Text style={styles.textoTitulo}>O que fazer?</ Text>

            <Text style={styles.textoSubtitulo}>•	Evite situações que causem estresse;</ Text>
            <Text style={styles.textoSubtitulo}>•	Faça atividades de lazer, de trabalho, de aprendizagem 
            e de convivência em grupo. Troque experiências com outras mulheres, pois estas atividades 
            proporcionam momentos prazerosos e colaboram para a vivência do climatério de forma mais 
            positiva;</ Text>
            <Text style={styles.textoSubtitulo}>•	Procure ajuda médica caso sintomas de depressão 
            (tristeza, desânimo, falta de energia, cansaço, perda de prazer) e ansiedade sejam 
            frequentes e de longa duração.</ Text>
        </View>
        </ScrollView>
      );
  }

export default TextSintomas;