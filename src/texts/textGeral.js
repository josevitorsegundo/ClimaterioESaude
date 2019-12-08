import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import TextSexo from './textSexo';
import TextSaudeBucal from './textSaudeBucal';
import TextTerapias from './textTerapias';
//expot em App e chamar tela no Button Cuidados

const TextGeral = (indicadorText) => {
    if (indicadorText === 'Sexo'){
    return (
        <TextSexo/>
      );
    }
    else if (indicadorText === 'Saúde Bucal') {
        return (
            <TextSaudeBucal/>
        );
    } else {
        return (
            <TextTerapias/>
        );
    } 
      
  }

export default TextGeral;