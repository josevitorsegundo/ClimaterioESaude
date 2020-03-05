import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions, Button, Image } from 'react-native';
import styles from '../styles/stylesText';
class TextMassa extends Component {
  
  state ={
  altura: 0,
  massa: 0,
  resultadoNumero: 0,
  resultadoTexto: ""
  };

  handleCalculate = () => {
  if (this.state.altura != 0 && this.state.massa != 0) { 
  let imc = (this.state.massa)/ (this.state.altura * this.state.altura); // verificar condição
  this.setState({
    resultadoNumero: imc.toFixed(2)
  });
    if (imc < 24.9){
    this.setState({ resultadoTexto:
    "Adequado"});
    } else if (imc > 24.9 && imc < 29.99){
      this.setState({ resultadoTexto: 
      "Sobrepeso"});
    } else if (imc>=30){
       this.setState( { resultadoTexto: 
      "Obesidade"})
    } else {
     this.setState( { resultadoTexto: 
        "Abaixo"})
    }
    } else{
      this.setState( { resultadoTexto: 
        "ERROR"})
    }
   }
    render(){
      var {height, widht} = Dimensions.get('window')
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoTitulo}>• Mantenha o peso normal para prevenir sobrepeso e 
        obesidade</Text>
        
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 200, height: 200}} source={require('../images/imagem6.jpg')}/>
          </View>
        
        <Text style={styles.textoSubtitulo}>Durante o envelhecimento feminino, ocorre redução do 
        metabolismo. No climatério, o ganho de peso chega a 800 gramas por ano, podendo haver um aumento 
        de até 20% na gordura corporal. Manter-se ativa ou em movimento colabora para acelerar o 
        metabolismo e diminuir o ganho de peso.</Text>

        <Text style={styles.textoSubtitulo}>Para saber se seu peso está adequado, calcule seu índice de 
        massa corporal (IMC). </Text>
        
        <Text style={styles.textoSubtitulo}>Clique abaixo e insira sua altura e massa respectivamente: </Text>
        <View style={{padding:10}}>
        <TextInput
          placeholder="Altura (exemplo: 1.53)"
          keyboardType="numeric"
          style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#B665A0'}}
          onChangeText={altura => {this.setState({ altura });}}
          />
          <TextInput
              placeholder="Massa (exemplo: 50.5)"
              keyboardType="numeric"
              style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#B665A0'}}
              onChangeText={massa => {
                this.setState({ massa });
              }}
            />
        </View>

        <Button
          title="Calcular"
          onPress={this.handleCalculate}
          color="#B665A0"
        />

          <View>
          <Text style={{textAlign: "center", fontSize: 20}}>{this.state.resultadoNumero}</Text>
          <Text style={{textAlign: "center", fontSize: 20}}>
            {this.state.resultadoTexto}
          </Text>
          </View>

          <Text style={styles.textoSubtitulo}>* ISERIR TABELA IMC DO ARQUIVO COMO IMAGEM. </Text>

           <Text style={styles.textoSubtitulo}>A medida da circunferência abdominal (medida da cintura) 
           permite conhecer o risco de desenvolver doenças do coração e diabetes.</ Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 200, height: 200}} source={require('../images/imagem7.jpg')}/>
            </View>

            <Text style={styles.textoSubtitulo}>INSERIR TABELA CIRCUNFERÊNCIA COMO IMAGEM</Text>

           <Text style={styles.textoSubtitulo}>•	As mulheres acima do peso, ou seja, com índice de massa 
           corporal (IMC) de 25 a 29,9 kg/m², devem realizar um mínimo de 60 a 90 minutos de atividade 
           física moderada, preferencialmente todos os dias da semana.</ Text>
           <Text style={styles.textoSubtitulo}>•	Mulheres obesas devem realizar 300 minutos de atividade 
           física por semana para reduzir a gordura corporal total.</ Text>
      </View>
      </ScrollView>
      );
    }
}

export default TextMassa;