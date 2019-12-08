import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import styles from '../styles/stylesText';
//linha 179 -- são sinais suspeitos -- verificar se tem como deixar em negrito só essa parte
//expot em App e chamar tela no Button Cuidados
//verificar link



const TextPrevencao = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textoSubtitulo}>No período pós-menopausa as mulheres ficam mais vulneráveis a 
            desenvolverem algumas doenças. Isto ocorre devido à diminuição dos hormônios femininos, 
            principalmente o estrogênio e também aos fatores naturais do envelhecimento (BRASIL, 2017). </Text>
            <Text style={styles.textoTitulo}>1- Doenças Cardiovasculares</Text>
            <Text style={styles.textoSubtitulo}>As doenças cardiovasculares ocupam o primeiro lugar como 
            causa de morte feminina. </Text>
            <Text style={styles.textoSubtitulo}>Estas medidas abaixo ajudam a prevenir infarto (ataque cardíaco), 
            aterosclerose (enrijecimento das artérias), dislipidemia (elevação dos níveis de gorduras ruins e 
            diminuição das gorduras boas), diabetes, hipertensão arterial (pressão alta), obesidade, acidente vascular 
            encefálico (derrame).</Text>
            <Text style={styles.textoSubtitulo}>• Adote um estilo de vida saudável, pratique exercícios físicos, 
            mantenha o peso adequado (AHA, 2014).</Text>
            <Text style={styles.textoSubtitulo}>• Praticar yoga reduz a pressão arterial, reduz o peso e os 
            níveis de gorduras ruins do sangue </ Text>
            <Text style={styles.textoSubtitulo}>• Não fume e evite ficar no mesmo ambiente em que pessoas 
            estejam fumando (fumo passivo) (LEE et al., 2017).</ Text>
            <Text style={styles.textoSubtitulo}>• Beber no máximo uma dose de bebida alcoólica por dia</ Text>
            <Text style={styles.textoSubtitulo}>• Consumir grandes quantidade de vegetais, frutas e cereais 
            integrais, linhaça, aves, peixes (salmão, atum dê exemplos mais comuns) legumes, óleos vegetais 
            (oliva), óleo de linhaça e nozes (LEE et al., 2017).</ Text>
            <Text style={styles.textoSubtitulo}>• Adotar dieta pobre em sódio (2 gramas de sódio ou 5 gramas 
            de sal ou uma colher de chá cheia por dia), açúcares simples e gorduras saturadas 
            (AHA, 2014; BRASIL, 2019).</ Text>
            <Text style={styles.textoSubtitulo}>• Mantenha o peso saudável ao longo da vida</ Text>
            <Text style={styles.textoSubtitulo}>•	A dieta mediterrânea que contém frutas legumes, 
            frutas secas e azeite de oliva também previne doenças cardiovasculares 
            (ROYO-BORDONADA et al., 2016).</ Text>
            <Text style={styles.textoTitulo}>2 - Prevenção de osteoporose e quedas</ Text>
            <Text style={styles.textoSubtitulo}>A osteoporose é uma doença silenciosa que causa fraturas 
            na população acima de 50 anos. As mulheres na pós- menopausa são grande parte das vítimas, 
            porque neste período elas passam por uma perda óssea devido a menor absorção de cálcio pelo 
            organismo tornando os ossos frágeis e vulneráveis a fraturas 
            (BRASIL, 2017; RADOMINSKI et al., 2017).</ Text>
            <Text style={styles.textoTitulo}>Fatores de risco para osteoporose</ Text>
            <Text style={styles.textoSubtitulo}>Maior tempo de menopausa, peso elevado, maior número de filhos, 
            sedentarismo, história familiar de osteoporose, uso de fumo, idade mais avançada, ter menstruado 
            cedo, baixa ingestão de alimentos ricos em cálcio e ingestão elevada de alimentos ricos em cafeína 
            são fatores de risco para fragilidade dos ossos 
            (BRASIL, 2016; COMPSTON et al., 2017; CANADÁ, 2019).</ Text>
            <Text style={styles.textoTitulo}>O que fazer para prevenir osteoporose e quedas?</ Text>
            <Text style={styles.textoSubtitulo}>• Inclua na alimentação alimentos ricos em vitamina D e cálcio 
            para prevenir a osteoporose: leite, iogurte, queijos, couve, agrião, espinafre, taioba, brócolis, 
            repolho, sardinha e castanhas (BRASIL, 2016).</ Text>
            <Text style={styles.textoSubtitulo}>• Pessoas com intolerância à lactose podem optar por bebidas 
            à base de soja, amêndoa e arroz fortificados com cálcio (CANADÁ, 2019).</ Text>
            <Text style={styles.textoSubtitulo}>• Inclua ameixas secas como parte de suas recomendações de 
            consumo de frutas, pois elas tem potencial para reduzir a perda óssea na pós-menopausa 
            (WALACE, 2017).</ Text>
            <Text style={styles.textoSubtitulo}>• Mulheres com mais de 50 anos devem ingerir 1200 mg de 
            cálcio diariamente através da alimentação e , se necessário, complementar com suplemento de cálcio</ Text>
            <Text style={styles.textoSubtitulo}>• Tome sol sem filtro solar por 15 minutos todos os dias antes 
            das 10 horas e após 16h</ Text>
            <Text style={styles.textoSubtitulo}>• Pratique exercícios físicos regulares, pois eles fortalecem 
            os ossos, melhoram o equilíbrio e flexibilidade</ Text>
            <Text style={styles.textoSubtitulo}>• Pare de fumar</ Text>
            <Text style={styles.textoSubtitulo}>• Não consuma bebidas alcóolicas e, se consumir reduza para 
            duas doses ou menos por dia (fumo e álcool reduzem a absorção de cálcio pelos ossos)</ Text>
            <Text style={styles.textoSubtitulo}>• Diminua a ingestão de cafeína (chocolate, café, refrigerante)</ Text>
            <Text style={styles.textoSubtitulo}>• Alimente-se com quantidades suficientes de proteínas</ Text>
            <Text style={styles.textoSubtitulo}>• Para reduzir o risco de quedas pratique exercícios que 
            fortaleçam o quadríceps (músculo da parte da frente da coxa) e exercícios com suporte do próprio peso</ Text>
            <Text style={styles.textoSubtitulo}>• Praticar Tai Chi reduz o risco de quedas</ Text>
            <Text style={styles.textoSubtitulo}>• Medidas de segurança doméstica para reduzir o risco de 
            quedas: tapetes antiderrapantes no banheiro, substituir pisos escorregadios, iluminação adequada, 
            cuidados com escadas e degraus</ Text>
            <Text style={styles.textoSubtitulo}>• Medicações sedativas e hipnóticas (medicações controladas) 
            reduzem a absorção de cálcio</ Text>
            <Text style={styles.textoSubtitulo}>• Aumente a atenção se tiver dificuldade para enxergar ou 
            ouvir, pois estes problemas também aumentam o risco de quedas</ Text>
            <Text style={styles.textoSubtitulo}>• Conheça e pratique exercícios que auxiliam no fortalecimento 
            muscular, alongamento e melhoram o equilíbrio na Cartilha da Sociedade Brasileira de Reumatologia 
            que está disponível no link: </ Text>
            <Text style={styles.textoSubtitulo}>https://www.reumatologia.org.br/download/osteoporose/</ Text>
            <Text style={styles.textoTitulo}>Como é feito o diagnóstico da osteoporose?</ Text>
            <Text style={styles.textoSubtitulo}>A densidade mineral óssea (DMO) avalia a força e qualidade dos 
            ossos, também estima seu risco de fratura. Este exame deve ser realizado por todas as mulheres com 
            65 anos ou mais e por mulheres na pós-menopausa que tenham doenças que levem à perda óssea e que 
            tenham pelo menos um fator de risco para fraturas: fumante, peso abaixo de 57,7 kg, ingestão 
            excessiva de álcool, portadora de artrite reumatoide, história de fratura de quadril dos pais, 
            fraturas após a menopausa (menos crânio, osso facial, tornozelo e dedos ), (NAMS, 2013).</ Text>
            <Text style={styles.textoTitulo}>Prevenção de câncer no climatério</ Text>
            <Text style={styles.textoTitulo}>- Câncer de colo do útero (BRASIL, 2016; RABELO, 2019)</ Text>
            <Text style={styles.textoTitulo}>Fatores de risco</ Text>
            <Text style={styles.textoSubtitulo}>O câncer do colo de útero ocorre quando há um 
            crescimento desordenado das células deste órgão.</ Text>
            <Text style={styles.textoSubtitulo}>A infecção pelo Papilomavírus Humano (HPV) é um fator 
            importante para o surgimento deste câncer, estando este vírus presente em 70% dos casos.</ Text>
            <Text style={styles.textoSubtitulo}>Cerca de 80% das mulheres sexualmente ativas são contaminadas 
            pelo HPV ao longo de sua vida e 32% são infectadas pelos tipos de HPV que desenvolvem lesões de 
            câncer.</ Text>
            <Text style={styles.textoTitulo}>Alterações no colo</ Text>
            <Text style={styles.textoSubtitulo}>Grande parte das infecções no colo do útero é passageira e 
            desaparece sozinha. As lesões persistentes são conhecidas como ‘’feridas” e são classificadas 
            como: NIC I, II e III. Estas são as chamadas lesões precursoras de câncer, pois tem potencial para 
            se transformarem em câncer invasor, se não tratadas corretamente.</ Text>
            <Text style={styles.textoTitulo}>Prevenção </ Text>
            <Text style={styles.textoSubtitulo}>O contato com vírus HPV ocorre através de contato direto da 
            pele ou mucosa infectada, principalmente durante as relações sexuais. O uso de preservativos 
            masculinos e femininos não protege totalmente da infecção, pois o contato sexual também acontece na 
            região não coberta pela camisinha (vulva, região escrotal e anal).</ Text>
            <Text style={styles.textoSubtitulo}>• Use preservativo em todas as relações desde o início do 
            contato sexual</ Text>
            <Text style={styles.textoSubtitulo}>• O preservativo feminino é mais eficaz na prevenção contra o 
            vírus HPV</ Text>
            <Text style={styles.textoSubtitulo}>• Evite ter mais de um parceiro sexual</ Text>
            <Text style={styles.textoSubtitulo}>• Realize higiene pessoal após as relações sexuais</ Text>
            <Text style={styles.textoTitulo}>Rastreamento</ Text>
            
            <Text style={styles.textoSubtitulo}>Rastreamento significa a realização de exames em mulheres 
            sadias, para que sejam identificadas pessoas que tenham a doença, mas ainda não apresentaram 
            sinais e sintomas. Os exames devem ser realizados periodicamente, por um certo período, pois assim 
            existe maior chance de identificar a doença em sua fase inicial.</ Text>
            <Text style={styles.textoSubtitulo}>A prevenção ou Papanicolau é o exame para rastreamento do 
            câncer de colo do útero e deve ser realizada a partir de 25 anos em mulheres que iniciaram atividade 
            sexual. Mulheres sem história de atividade sexual, não devem realizar rastreamento.</ Text>
            <Text style={styles.textoSubtitulo}>Os dois primeiros exames devem ser realizados com intervalo de 
            um ano e após dois resultados normais, os exames devem ser realizados a cada três anos até os 64 
            anos de idade.</ Text>
            <Text style={styles.textoSubtitulo}>• Realize exame preventivo (citologia oncótica ou exame de 
            Papanicolau) periodicamente e se, com intervalo de um ano, os resultados de dois exames preventivos 
            forem normais, realizar o próximo exame a cada 03 anos</ Text>
            <Text style={styles.textoSubtitulo}>• Faça exames preventivos até 64 anos e deixe de fazer se após 
            64 anos, tiver dois exames com resultados negativos nos últimos 5 anos. Mulheres com 64 anos ou 
            mais, que tenham história de lesão que possa causar câncer devem continuar o rastreamento</ Text>
            <Text style={styles.textoTitulo}>Cuidados antes da realização da citologia do colo uterino 
            (RABELO, 2019): </ Text>
            <Text style={styles.textoSubtitulo}>• Não realizar ultrassonografia transvaginal dois 
            dias antes do exame, pois o gel utilizado interfere na qualidade da amostra;</ Text>
            <Text style={styles.textoSubtitulo}>• Não usar gel, lubrificantes, espermicidas ou 
            medicações vaginais dois dias antes do exame;</ Text>
            <Text style={styles.textoSubtitulo}>• Não usar preservativos com lubrificantes dois dias 
            antes do exame; </ Text>
            <Text style={styles.textoSubtitulo}>• Se estiver no período menstrual, adiar o exame 
            para o quinto dia após o término da menstruação, a menos que o sangramento vaginal 
            seja anormal o que justifica a coleta do exame.</ Text>
            <Text style={styles.textoTitulo}>- Câncer de mama (BRASIL, 2015; RABELO, 2019)</ Text>
            <Text style={styles.textoSubtitulo}>O câncer de mama se caracteriza pelo crescimento 
            desordenado de células anormais na mama. Estas alterações acontecem devido a alterações genéticas, 
            herança familiar, devido à exposição a fatores ambientais ou ainda a características individuais do 
            organismo de cada pessoa.</ Text>
            <Text style={styles.textoTitulo}>Fatores gerais de risco para câncer de mama</ Text>
            <Text style={styles.textoSubtitulo}>• O principal fator de risco para este câncer é a idade, 
            pois quanto maior a idade, maior o risco de adoecimento e morte por essa doença</ Text>
            <Text style={styles.textoSubtitulo}>• Fatores hormonais e reprodutivos também aumentam o risco 
            desenvolver câncer de mama: primeira menstruação precoce, menopausa tardia (após 55 anos), não ter 
            filhos ou engravidar após 30 anos; fazer uso de reposição hormonal por longos períodos; obesidade; 
            consumir mais de três doses de bebida alcóolica por semana; uso de fumo atual ou no passado 
            (CRUZ; SARFATY, 2014; RABELO, 2019).</ Text>
            <Text style={styles.textoTitulo}>Quem são as pessoas que possuem risco elevado para câncer de 
            mama?</ Text>
            <Text style={styles.textoSubtitulo}>• Mulheres com mãe ou irmã diagnosticadas com câncer de mama 
            antes de 50 anos</ Text>
            <Text style={styles.textoSubtitulo}>• Mulheres que tiveram mãe ou irmã diagnosticada com câncer de mama 
            bilateral ou de ovário em qualquer idade</ Text>
            <Text style={styles.textoSubtitulo}>• Mulheres com história de câncer de mama em parente do sexo 
            masculino</ Text>
            <Text style={styles.textoTitulo}>São recomendações para a prevenção do câncer de mama:</ Text>
            <Text style={styles.textoSubtitulo}>• Realize mamografia anualmente a partir de 40 anos</ Text>
            <Text style={styles.textoSubtitulo}>• Tenha medidas de autocuidado como o hábito de observação 
            das mamas para que reconheça sinais e sintomas suspeitos </ Text>
            <Text style={styles.textoSubtitulo}>• Na posição deitada e em pé observar a aparência e contorno 
            das mamas em frente a um espelho</ Text>
            <Text style={styles.textoSubtitulo}>- *São sinais suspeitos*: nódulos (caroços) nas mamas e axilas, 
            saída de secreção com sangue pelos mamilos (bico dos seios), manchas vermelhas nas mamas, diferença 
            de tamanho das mamas, edema (inchaço), pele da mama enrugada ou com aparência de casca de laranja, 
            mudança no formato dos mamilos.</ Text>
            <Text style={styles.textoSubtitulo}>• Adote estilo de vida saudável: não fume e evite bebidas 
            alcóolicas</ Text>
            <Text style={styles.textoSubtitulo}>• Evite suplementos nutricionais, a menos que tenha sido prescrito 
            por médico</ Text>
            <Text style={styles.textoSubtitulo}>• Não se exponha à radiação</ Text>
            <Text style={styles.textoSubtitulo}>• Mantenha o peso corporal adequado, principalmente após a 
            menopausa</ Text>
            <Text style={styles.textoSubtitulo}>• Pratique 180 minutos de atividade física cardiorrespiratória, 
            (caminhada, corrida, dança, ciclismo) por semana (30 minutos ao dia seis vezes na semana), 
            (HARVIE; HOWELL; EVANS, 2015; RABELO, 2019).</ Text>
            <Text style={styles.textoTitulo}>-Prevenção de Infecções Sexualmente Transmissíveis (IST)</ Text>
            <Text style={styles.textoSubtitulo}>As Infecções Sexualmente Transmissíveis (IST) são doenças 
            transmitidas de uma pessoa a outra por contato sexual ou sangue. Feridas nos órgãos genitais, 
            corrimento na uretra ou vagina e doença inflamatória pélvica (DIP) são sintomas das IST 
            (BRASIL, 2015).</ Text>
            <Text style={styles.textoSubtitulo}>Para prevenir Infecções Sexualmente Transmissíveis tenha 
            os seguintes cuidados (BRASIL, 2019):</ Text>
            <Text style={styles.textoSubtitulo}>• Use preservativo</ Text>
            <Text style={styles.textoSubtitulo}>• Vacine-se contra hepatites A e B</ Text>
            <Text style={styles.textoSubtitulo}>• Converse com seu parceiro e pergunte se ele realizou 
            recentemente exames para HIV e hepatites.</ Text>
            <Text style={styles.textoSubtitulo}>• Faça testes para HIV e outras infecções sexualmente 
            transmissíveis (IST) regularmente</ Text>
            <Text style={styles.textoSubtitulo}>• Realize exame preventivo para câncer do colo uterino </ Text>
            <Text style={styles.textoSubtitulo}>• Se possuir diagnóstico de HIV, faça o tratamento conforme orientação 
            médica</ Text>
            <Text style={styles.textoSubtitulo}>• Guarde preservativos longe do calor e verifique se a embalagem está 
            danificada</ Text>
            <Text style={styles.textoSubtitulo}>• Use lubrificantes à base de água, pois óleos aumentam a chance de o 
            preservativo rasgar-se</ Text>
            <Text style={styles.textoSubtitulo}>• Cada preservativo deve ser usado uma única vez</ Text>
            <Text style={styles.textoSubtitulo}>• Use apenas um preservativo por vez </ Text>
            <Text style={styles.textoSubtitulo}>• Troque o preservativo se a relação sexual for demorada</ Text>
            <Text style={styles.textoSubtitulo}>• Colocar o preservativo feminino antes da relação e retirá-lo após 
            a relação, ainda na posição deitada</ Text>
            <Text style={styles.textoSubtitulo}>• Para colocar o preservativo feminino, a mulher deve ficar na posição 
            em pé com um dos pés em cima de uma cadeira ou sentada com os joelhos afastados, agachada ou deitada.</ Text>
            <Text style={styles.textoSubtitulo}>• Apertar o anel móvel do preservativo e com o dedo indicador, 
            empurrá-lo o mais profundo possível, a argola externa deve ficar para fora da vagina. Guiar o pênis para o 
            centro do anel externo durante a penetração.</ Text>
            <Text style={styles.textoSubtitulo}>• O preservativo masculino deve ser colocado e retirado ainda com o pênis 
            ereto (duro), para evitar vazamento de esperma</ Text>
            <Text style={styles.textoSubtitulo}>• Deve-se deixar espaço da ponta do preservativo masculino para que receba 
            o esperma </ Text>
        </View>
        </ScrollView>
      );
  }

export default TextPrevencao;