import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import TextSexo from './textSexo';
import TextSaudeBucal from './textSaudeBucal';
import TextTerapias from './textTerapias';
//expot em App e chamar tela no Button Cuidados

const TextGeral = ({ind}) => {
//class TextGeral extends React.Component {  
    
  //  render() {
    
    //ind = 'Sexo' 
    //ind = {ind}   
    if (ind == 'Sexo'){
    return (
        <TextSexo/>
      );
    }
    else if (ind == 'Saúde Bucal') {
        return (
            <TextSaudeBucal/>
        );
    } else {
        return (
            <View>
            <TextTerapias/>
            </View>
        );
    } 
    //}
      
  }

export default TextGeral;