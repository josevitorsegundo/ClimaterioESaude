import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import TextAlimentos from './textAlimento';
import TextEstilo from './textEstiloVida';
import TextAtividadeFisica from './textAtividaFisica';
import TextMassa from './textPeso';
import TextSintomas from './textSintomas';
import TextPrevencao from './textPrevencao';
import TextSaudeBucal from './textSaudeBucal';
import TextSexo from './textSexo';
import TextTerapias from './textTerapias';
//expot em App e chamar tela no Button Cuidados

const TextGeral = ({ind}) => {
    const tela = (
      ind === 'Sexo' ? <TextSexo/> : 
      ind === 'Saúde Bucal' ? <TextSaudeBucal/> : 
      ind === 'Terapias' ? <TextTerapias/> :  
      ind === 'Prevenção de Doenças' ? <TextPrevencao/> : 
      ind === 'Sintomas' ? <TextSintomas/>  : 
      ind === 'Massa Corporal' ? <TextMassa/>  : 
      ind === 'Alimentação'  ? <TextAlimentos/> : 
      ind === 'Atividade Física' ? <TextAtividadeFisica/> :
      ind === 'Estilo de Vida' ? <TextEstilo/> :
        null
    )
     return(
       <View>
        {tela}
       </View>
     )
  }

export default TextGeral;