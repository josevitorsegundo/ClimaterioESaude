import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Linking, Image } from 'react-native';
import styles from '../styles/stylesText';
//linha 179 -- são sinais suspeitos -- verificar se tem como deixar em negrito só essa parte
//expot em App e chamar tela no Button Cuidados
//verificar link



const TextPrevencao = () => {
    //webkitURL = "www.google.com"; 
    
    return (
        <ScrollView>
        <View style={styles.container}>

            <Text style={styles.textoSubtitulo}>Como parte do processo natural do envelhecimento 
            feminino, o período pós-menopausa torna as mulheres mais vulneráveis a desenvolver algumas 
            doenças. A diminuição dos hormônios femininos é um dos fatores que contribui para o 
            surgimento de males nessa fase da vida.</Text>

            <Text style={styles.textoTitulo}>1-	Doenças Cardiovasculares</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/doencas1.jpg')}/>
            
            </View>

            <Text style={styles.textoSubtitulo}>As doenças cardiovasculares (DCV) ocupam o primeiro lugar 
            como causa de morte feminina. As medidas abaixo ajudam a prevenir algumas DCV, como infarto 
            (ataque cardíaco), aterosclerose (enrijecimento das artérias), dislipidemia (elevação dos 
            níveis de gorduras ruins e diminuição das gorduras boas), diabetes, hipertensão arterial 
            (pressão alta), obesidade, acidente vascular encefálico (derrame):</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 250, height: 200}} source={require('../../assets/images/doencas2.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>• Adote um estilo de vida saudável: pratique exercícios 
            físicos e mantenha o peso adequado;</Text>
            <Text style={styles.textoSubtitulo}>• Não fume e evite ficar no mesmo ambiente em que 
            pessoas estejam fumando (fumo passivo);</ Text>
            <Text style={styles.textoSubtitulo}>• Se beber, beba, no máximo, uma dose de bebida 
            alcoólica por dia;</ Text>
            <Text style={styles.textoSubtitulo}>• Consuma grande quantidade de vegetais, frutas e 
            cereais integrais, linhaça, aves, peixes (salmão, atum, cavala, sardinha, etc.), legumes, 
            óleos vegetais (como o de oliva, por exemplo), óleo de linhaça e nozes;</ Text>
            <Text style={styles.textoSubtitulo}>• Insira na dieta os seguintes alimentos, pois eles 
            possuem substâncias (fitoestrógenos) que ajudam a equilibrar os hormônios na menopausa e 
            também reduzem o risco de doenças do coração: arroz, trigo, cevada, aveia integrais; 
            castanhas, nozes e amêndoas; cenoura, maçã, inhame e morango; gergelim, amendoim e alimentos 
            produzidos com soja; feijões, café e vinho, milho, pêra e azeitona</ Text>
            <Text style={styles.textoSubtitulo}>• “Adote dieta pobre em sal: consuma, no máximo, uma 
            colher de chá de sal por dia. Recomenda-se, ainda, uma dieta pobre em açúcares simples 
            (açúcar branco ou mascavo, mel, refrigerantes, balas, doces, etc.) e em gorduras saturadas 
            (aquelas que estão presentes em alimentos de origem animal como carnes gordurosas, manteiga 
            e em  óleos, como o de coco, dendê, etc.);”;</ Text>
            <Text style={styles.textoSubtitulo}>• A dieta mediterrânea previne doenças cardiovasculares 
            pois nela são consumidos alimentos que fornecem as “gorduras boas” (peixes, azeite de oliva, 
            castanhas). Nesta dieta usa- se alimentos frescos como: frutas, legumes, derivados do leite e 
            também  quantidade moderada de vinho (uma taça por dia) ;</ Text>
            <Text style={styles.textoSubtitulo}>• Praticar ioga reduz a pressão arterial, o peso e os 
            níveis de gorduras ruins do sangue;</ Text>

            

            <Text style={styles.textoTitulo}>2 - Prevenção de osteoporose e quedas</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 250, height: 200}} source={require('../../assets/images/doencas3.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>A osteoporose é uma doença que não apresenta sintomas e 
            que causa fraturas na população acima de 50 anos. As mulheres na pós-menopausa são grande 
            parte das vítimas dessa doença, pois, nesse período, seus ossos absorvem menor quantidade de 
            cálcio, ficando mais frágeis, aumentando o risco dessas lesões.</ Text>
            
            <Text style={styles.textoTitulo}>Fatores de risco para osteoporose</ Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/doencas4.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>São fatores de risco para a osteoporose: maior tempo de 
            menopausa, peso elevado, maior número de filhos, sedentarismo, histórico familiar de 
            osteoporose, fumo, idade mais avançada, ter menstruado cedo, baixa ingestão de alimentos 
            ricos em cálcio e grande consumo de alimentos ricos em cafeína.</ Text>

            <Text style={styles.textoTitulo}>O que fazer para prevenir osteoporose e quedas?</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/doencas5.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>• Consuma alimentos ricos em vitamina D e cálcio, tais 
            como: leite, iogurte, queijos, couve, agrião, espinafre, taioba, brócolis, repolho, sardinha 
            e castanhas;</ Text>
            <Text style={styles.textoSubtitulo}>• Pessoas com intolerância à lactose podem optar por 
            bebidas à base de soja, amêndoa ou arroz fortificados com cálcio;</ Text>
            <Text style={styles.textoSubtitulo}>• Consuma ameixas secas, pois elas têm potencial para 
            reduzir a perda óssea na pós-menopausa;</ Text>
            <Text style={styles.textoSubtitulo}>• Mulheres com mais de 50 anos devem ingerir 1200mg de 
            cálcio diariamente através da alimentação e, se necessário, complementar com suplemento de 
            cálcio;</ Text>
            <Text style={styles.textoSubtitulo}>• Tome sol sem filtro solar, por 15 minutos, todos os 
            dias, antes das 10 e após 16h;</ Text>
            <Text style={styles.textoSubtitulo}>• Se fumar, pare de fumar;</ Text>
            <Text style={styles.textoSubtitulo}>• Não consuma bebidas alcoólicas e, se consumir, 
            limite a duas doses ou menos por dia 
            (fumo e álcool reduzem a absorção de cálcio pelos ossos);</ Text>
            <Text style={styles.textoSubtitulo}>• Evite o consumo de medicações sedativas e hipnóticas 
            (medicações controladas), pois elas reduzem a absorção de cálcio;</ Text>
            <Text style={styles.textoSubtitulo}>•	Diminua a ingestão de alimentos que contenham cafeína, 
            a exemplo de: chocolate, café e refrigerante;</ Text>

            <Text style={styles.textoSubtitulo}>• Alimente-se com quantidades suficientes de 
            proteínas;</ Text>
            <Text style={styles.textoSubtitulo}>• Praticar tai chi chuan reduz o risco de 
            quedas;</ Text>
            <Text style={styles.textoSubtitulo}>• Use medidas de segurança doméstica para reduzir o 
            risco de quedas: tapetes antiderrapantes no banheiro, substituição dos pisos escorregadios, 
            iluminação adequada, atenção às escadas e aos degraus;</ Text>
            <Text style={styles.textoSubtitulo}>• Aumente a atenção se tiver dificuldade para enxergar ou 
            ouvir, pois esses problemas também aumentam o risco de quedas;</ Text>
            <Text style={styles.textoSubtitulo}>• Pratique exercícios físicos regularmente, pois eles 
            fortalecem os ossos, melhoram o equilíbrio e a flexibilidade;</ Text>
            <Text style={styles.textoSubtitulo}>Recomenda-se exercícios que fortaleçam o quadríceps 
            (músculo da parte da frente da coxa) e exercícios com suporte do próprio peso; Conheça os 
            exercícios recomendados na Cartilha da Sociedade Brasileira de Reumatologia, que está 
            disponível no link:</ Text>

            <Text  
            textContentType= 'URL'
            onPress={()=> Linking.openURL('https://www.reumatologia.org.br/download/osteoporose/')} 
            style={styles.textoLinkingSite}>https://www.reumatologia.org.br/download/osteoporose/
            </ Text>
            
            <Text style={styles.textoTitulo}>Como é feito o diagnóstico da osteoporose?</ Text>

            <Text style={styles.textoSubtitulo}>A Densitometria óssea é o exame que mede a densidade 
            mineral dos ossos (DMO), estimando o risco de fraturas. Esse exame deve ser realizado por 
            todas as mulheres com 65 anos ou mais, e por aquelas que estejam na pós-menopausa que tenham 
            doenças que levem à perda óssea ou que tenham, pelo menos, um fator de risco para fraturas, 
            como: ser fumante, ter peso abaixo de 57,7kg, ingerir álcool em excesso, portadora de artrite 
            reumatóide, histórico de fratura de quadril dos pais, relato de fraturas após a menopausa 
            (menos crânio, osso facial, tornozelo e dedos).</ Text>

            <Text style={styles.textoTitulo}>3- Prevenção de câncer no climatério</ Text>

            <Text style={styles.textoTitulo}>Câncer de colo do útero</ Text>

            <Text style={styles.textoTitulo}>Fatores de risco</ Text>

            <Text style={styles.textoSubtitulo}>O câncer do colo de útero ocorre quando há um crescimento 
            desordenado das células deste órgão. A infecção pelo papilomavírus humano (HPV) é um fator 
            importante para o surgimento deste câncer, estando presente em 70% dos casos.</ Text>
            <Text style={styles.textoSubtitulo}>Cerca de 80% das mulheres sexualmente ativas são 
            contaminadas pelo HPV ao longo de sua vida, e 32% são infectadas pelos tipos de HPV 
            que desenvolvem lesões de câncer.</ Text>

            <Text style={styles.textoTitulo}>Alterações no colo</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 250, height: 200}} source={require('../../assets/images/doencas6.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Grande parte das infecções no colo do útero é passageira 
            e desaparecem sozinhas. As lesões persistentes são conhecidas como “feridas”, elas são 
            classificadas como: NIC (Neoplasia Intraepitelial Cervical) I, II e III. Essas são as 
            chamadas lesões precursoras de câncer, pois têm potencial para se transformarem em câncer 
            invasor, se não tratadas corretamente.</ Text>

            <Text style={styles.textoTitulo}>Prevenção </ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/doencas7.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>O contato com vírus HPV ocorre através de contato direto 
            da pele ou mucosa infectada, principalmente durante as relações sexuais. O uso de 
            preservativos masculinos e femininos não protege totalmente da infecção, pois o contato 
            sexual também acontece na área não coberta pela camisinha, como a vulva, região escrotal e 
            anal. Adote os seguintes cuidados:</ Text>

            <Text style={styles.textoSubtitulo}>• Use preservativo em todas as relações desde o início do contato 
            sexual;</ Text>
            <Text style={styles.textoSubtitulo}>• O preservativo feminino é mais eficaz na prevenção contra o vírus 
            HPV;</ Text>
            <Text style={styles.textoSubtitulo}>• Evite ter mais de um parceiro sexual;</ Text>
            <Text style={styles.textoSubtitulo}>• Realize higiene pessoal após as relações sexuais.</ Text>
            
            <Text style={styles.textoTitulo}>Rastreamento</ Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/doencas8.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Rastreamento significa a realização de exames em mulheres 
            sadias para que sejam identificadas pessoas que tenham a doença, mas ainda não apresentaram 
            sinais e sintomas. Os exames devem ser realizados periodicamente, por um certo período, pois, 
            assim, existe maior chance de identificar a doença em sua fase inicial. A prevenção ou 
            papanicolau, que é o exame para rastreamento do câncer de colo do útero, deve ser realizado a 
            partir de 25 anos, em mulheres que iniciaram atividade sexual. Aquelas que nunca tiveram 
            atividade sexual não precisam realizar rastreamento;</ Text>

            <Text style={styles.textoSubtitulo}>• Realize exame preventivo periodicamente e se, com 
            intervalo de um ano, os resultados de dois exames forem normais, realizar o próximo exame a 
            cada 03 anos; </ Text>
            <Text style={styles.textoSubtitulo}>• Faça exames preventivos até os 64 anos. Se, após os 
            64 anos, tiver dois exames com resultados normais nos últimos cinco anos, esses não serão 
            mais necessários. Porém, mulheres com 64 anos ou mais que tenham histórico de lesão que 
            possa causar câncer devem continuar o rastreamento;</ Text>

            <Text style={styles.textoTitulo}>Cuidados antes da realização da citologia do colo 
            uterino</ Text>

             <Text style={styles.textoSubtitulo}>• Não realizar ultrassonografia transvaginal dois dias 
            antes do exame, pois o gel utilizado interfere na qualidade da amostra;</ Text>
            <Text style={styles.textoSubtitulo}>• Não usar gel, lubrificantes, espermicidas ou medicações 
            vaginais dois dias antes do exame;</ Text>
            <Text style={styles.textoSubtitulo}>• Não usar preservativos com lubrificantes dois dias 
            antes do exame; </ Text>
            <Text style={styles.textoSubtitulo}>• Se estiver no período menstrual, adiar o exame para o 
            quinto dia após o fim da menstruação, a menos que o sangramento vaginal seja anormal, o 
            que justifica a coleta do exame;</ Text>
           
            <Text style={styles.textoTitulo}>Câncer de mama </ Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 250, height: 200}} source={require('../../assets/images/doencas9.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Fonte: SBM</ Text>

            <Text style={styles.textoSubtitulo}>O câncer de mama se caracteriza pelo crescimento 
            desordenado de células anormais na mama. Essas alterações acontecem devido às mudanças 
            genéticas, herança familiar, exposição a fatores ambientais ou, ainda, características 
            individuais do organismo de cada pessoa.</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 250, height: 200}} source={require('../../assets/images/doencas10.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Fonte: SBM</ Text>

            <Text style={styles.textoTitulo}>Fatores gerais de risco para câncer de mama</ Text>
            
            <Text style={styles.textoSubtitulo}>• O principal fator de risco para este câncer é a idade, 
            pois quanto maior a idade, maior o risco de adoecimento e morte por essa doença;</ Text>
            <Text style={styles.textoSubtitulo}>•	Fatores hormonais e reprodutivos também aumentam o 
            risco desenvolver câncer de mama: primeira menstruação precoce; menopausa tardia 
            (após 55 anos); não ter filhos ou engravidar após 30 anos; fazer uso de reposição hormonal 
            por longos períodos; obesidade; consumir mais de três doses de bebida alcoólicas, por semana; 
            e uso de fumo atual ou no passado.</ Text>
            
            <Text style={styles.textoTitulo}>Quem são as pessoas que possuem risco elevado para câncer de 
            mama?</ Text>

            <Text style={styles.textoSubtitulo}>• Mulheres com mãe ou irmã diagnosticadas com câncer de 
            mama antes de 50 anos;</ Text>
            <Text style={styles.textoSubtitulo}>• Mulheres que tiveram mãe ou irmã diagnosticada com 
            câncer nas duas mamas ou de ovário em qualquer idade;</ Text>
            <Text style={styles.textoSubtitulo}>• Mulheres com histórico de câncer de mama em parente 
            do sexo masculino;</ Text>
            
            <Text style={styles.textoTitulo}>São recomendações para a prevenção do câncer de mama:</ Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/doencas11.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>• Realize mamografia anualmente a partir de 40 anos</ Text>
            <Text style={styles.textoSubtitulo}>• Exponha-se a radiação apenas quando houver recomendação 
            médica para realizar exames radiológicos;</ Text>
            <Text style={styles.textoSubtitulo}>• Adote estilo de vida saudável: não fume e evite bebidas 
            alcoólicas;</ Text>
            <Text style={styles.textoSubtitulo}>• Mantenha o peso corporal adequado, principalmente após 
            a menopausa;</ Text>
            <Text style={styles.textoSubtitulo}>• Pratique 180 minutos de atividade física 
            cardiorrespiratória (caminhada, corrida, dança, ciclismo), por semana, ou seja, 30 minutos ao 
            dia, seis vezes por semana.</ Text>
            
            <Text style={styles.textoTitulo}>Sinais suspeitos de câncer de mama</ Text>

            <Text style={styles.textoSubtitulo}>O hábito de observação das mamas possibilita que sejam 
            reconhecidos sinais e sintomas suspeitos. Na posição deitada e também em pé observar a 
            aparência e contorno das mamas em frente a um espelho.</ Text>
            
            <Text style={styles.textoSubtitulo}>• São sinais suspeitos: nódulos (caroços) nas mamas e 
            axilas, saída de secreção com sangue pelos mamilos (bico dos seios), manchas vermelhas nas 
            mamas, diferença de tamanho das mamas, edema (inchaço), pele da mama enrugada ou com 
            aparência de casca de laranja, mudança no formato dos mamilos.</ Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 200, height: 250}} source={require('../../assets/images/doencas12.jpg')}/>
            </View>

            <Text style={styles.textoTitulo}>4 - Prevenção de infecções sexualmente transmissíveis 
            (IST)</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/doencas13.jpg')}/>
            </View>
            
            <Text style={styles.textoSubtitulo}>As infecções sexualmente transmissíveis (IST) são doenças 
            transmitidas de uma pessoa a outra por contato sexual ou sangue. Feridas nos órgãos genitais, 
            corrimento na uretra ou vagina e dor pélvica são sintomas das IST.</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 250, height: 200}} source={require('../../assets/images/doencas14.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Para prevenir IST tenha os seguintes cuidados:</ Text>
            
            <Text style={styles.textoSubtitulo}>• Use preservativo (masculino ou feminino);</ Text>
            <Text style={styles.textoSubtitulo}>• Vacine-se contra as hepatites A e B;</ Text>
            <Text style={styles.textoSubtitulo}>• Converse com seu parceiro e pergunte se ele realizou 
            recentemente exames para HIV e hepatites;</ Text>
            <Text style={styles.textoSubtitulo}>• Faça testes para HIV e outras infecções sexualmente 
            transmissíveis (IST) regularmente. Esses testes são rápidos, seguros, sigilosos e gratuitos 
            na rede pública de saúde. Quanto mais cedo o tratamento for iniciado, menor a chance de 
            transmissão para o parceiro e melhor será a qualidade de vida da paciente;</ Text>
            <Text style={styles.textoSubtitulo}>• Realize exame preventivo para câncer do colo 
            uterino;</ Text>
            <Text style={styles.textoSubtitulo}>• Se possuir diagnóstico de HIV, faça o tratamento 
            conforme orientação médica;</ Text>
            <Text style={styles.textoSubtitulo}>• Guarde preservativos longe do calor e verifique se a 
            embalagem está danificada antes de usar;</ Text>
            <Text style={styles.textoSubtitulo}>• Use lubrificantes à base de água, pois óleos aumentam 
            a chance de o preservativo rasgar;</ Text>
            <Text style={styles.textoSubtitulo}>• Cada preservativo deve ser usado uma única vez;</ Text>
            <Text style={styles.textoSubtitulo}>• Troque o preservativo se a relação sexual for 
            demorada.</ Text>
        </View>
        </ScrollView>
      );
  }

export default TextPrevencao;