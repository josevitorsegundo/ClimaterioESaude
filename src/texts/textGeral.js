import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import TextSexo from './textSexo';
import TextSaudeBucal from './textSaudeBucal';
import TextTerapias from './textTerapias';
//expot em App e chamar tela no Button Cuidados

const TextGeral = (state) => {
    const ind = state.nameLocal;
    if (ind === 'Sexo'){
    return (
        <TextSexo/>
      );
    }
    else if (ind === 'Saúde Bucal') {
        return (
            <TextSaudeBucal/>
        );
    } else {
        return (
            <View>
                <Text>{JSON.stringify(state.nameLocal)}</Text>
            <Text>{JSON.stringify(ind)}</Text>
            <TextTerapias/>
            </View>
        );
    } 
      
  }

export default TextGeral;