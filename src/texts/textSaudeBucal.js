import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/stylesText';
//expot em App e chamar tela no Button Cuidados

const TextSaudeBucal = () => {
      return (
        <ScrollView>
        <View style={styles.container}>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text> </Text>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/saudeBucal2.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>Devido às mudanças hormonais naturais do envelhecimento 
            feminino, ocorrem alterações na estrutura dos ossos da face. O uso de fumo e a higiene 
            inadequada da boca também podem causar problemas como cáries, inflamação na gengiva e/ou no 
            osso que sustenta os dentes levando à sua. Siga as recomendações para ter uma boa saúde 
            bucal (BRASIL, 2008; BRASIL, 2018):</Text>

            <Text style={styles.textoSubtitulo}>•	Escove os dentes todos os dias e após cada refeição, 
            além de uma última vez antes de dormir;</Text>
            <Text style={styles.textoSubtitulo}>•	Use a escova de dente de tamanho adequado, com cerdas 
            macias e creme dental com flúor;</Text>
            <Text style={styles.textoSubtitulo}>•	Complemente a higiene da boca passando fio dental entre 
            todos os dentes;</Text>
            <Text style={styles.textoSubtitulo}>•	Escove a língua “varrendo”, da parte interna até a 
            ponta;</ Text>
            <Text style={styles.textoSubtitulo}>•	Vá ao dentista regularmente;</ Text>
            <Text style={styles.textoSubtitulo}>•	Se usar prótese (dentadura), limpe-a fora da boca com 
            sabão ou pasta de dente e escova de dente separada para essa função. Antes de recolocar a 
            prótese, limpe a gengiva, o céu da boca e a língua;</Text>
            <Text style={styles.textoSubtitulo}>•	Se possível, fique sem a prótese algumas horas durante 
            o dia e durma sem ela. Use hidratantes bucais para aliviar secura na boca;</Text>
            <Text style={styles.textoSubtitulo}>•	Beba água e bebidas sem açúcar com frequência;</ Text>
            <Text style={styles.textoSubtitulo}>•	Masque chiclete para estimular a produção de 
            saliva;</ Text>
            <Text style={styles.textoSubtitulo}>•	Evite fumo e bebidas alcoólicas;</ Text>
            <Text style={styles.textoSubtitulo}>•	Evite alimentos salgados ou condimentados;</ Text>
            <Text style={styles.textoSubtitulo}>•	Procure o dentista se a prótese ficar solta e 
            dificultar a mastigação ou estiver machucando a gengiva;</ Text>
            <Text style={styles.textoSubtitulo}>Observe regularmente sua boca procurando alterações 
            nos lábios, bochechas e gengivas, céu da boca, garganta e abaixo da língua. Manchas, 
            caroços, inchaços, placas esbranquiçadas ou avermelhadas e feridas que não cicatrizam 
            (mesmo sem dor) são sinais de alerta para o câncer de boca.</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 200, height: 200}} 
            source={require('../../assets/images/saudeBucal3.jpg')}/>
            <Text> </Text>
            </View>

        </View>
        </ScrollView>
      );
  }

export default TextSaudeBucal;