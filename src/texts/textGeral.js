import React, { Component } from 'react';
import { View } from 'react-native';
//Import dos Textos
import TextClimaterioMenopausa from './textClimaterioMenopausa';
import TextAlimentos from './textAlimento';
import TextEstilo from './textEstiloVida';
import TextAtividadeFisica from './textAtividaFisica';
import TextMassa from './textPeso';
import TextSintomas from './textSintomas';
import TextPrevencao from './textPrevencao';
import TextSaudeBucal from './textSaudeBucal';
import TextSexo from './textSexo';
import TextTerapias from './textTerapias';
import TextSono from './textSono';
import TextFaleConosco from './textFaleConosco';

const TextGeral = ({ind}) => {
    const tela = (
      ind === 'Sexualidade' ? <TextSexo/> : 
      ind === 'Saúde Bucal' ? <TextSaudeBucal/> : 
      ind === 'Terapia Hormonal e práticas complementares' ? <TextTerapias/> :  
      ind === 'Prevenção de Doenças' ? <TextPrevencao/> : 
      ind === 'Sintomas' ? <TextSintomas/>  : 
      ind === 'Índice de Massa Corporal' ? <TextMassa/>  : 
      ind === 'Alimentação'  ? <TextAlimentos/> : 
      ind === 'Atividade Física' ? <TextAtividadeFisica/> :
      ind === 'Estilo de Vida Saudável' ? <TextEstilo/> :
      ind === 'Climatério e Menopausa' ? <TextClimaterioMenopausa/> :
      ind === 'Cuidados com o Sono' ? <TextSono/> :
      ind === 'Fale conosco' ? <TextFaleConosco/>:
      //ind === 'Diário' ? this.props.navigation.navigate('Diário') :
        null
    )
     return(
       <View>
        {tela}
       </View>
     )
  }

export default TextGeral;