import React, { Component } from 'react';
import { View } from 'react-native';
//Import dos Textos
import TextAlimentos from './textAlimento';
import TextEstilo from './textEstiloVida';
import TextAtividadeFisica from './textAtividaFisica';
import TextMassa from './textPeso';
import TextSintomas from './textSintomas';
import TextPrevencao from './textPrevencao';
import TextSaudeBucal from './textSaudeBucal';
import TextSexo from './textSexo';
import TextTerapias from './textTerapias';

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