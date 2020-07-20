import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions, Button, Image, Alert } from 'react-native';
import styles from '../styles/stylesText';
import { Table, Row, Rows } from 'react-native-table-component';

class TextMassa extends Component {
  
  constructor(props) {
    super(props);
    this.tabela1 = {
      tableHead: ['Índice de Massa Corporal (IMC)'],
      tableData: [
        ['Peso adequado', 'De 18,5 a 24,9 kg/m²'],
        ['Sobrepeso', 'De 25 a 29,9 kg/m²'],
        ['Obesidade', 'Igual ou maior que 30 kg/m²']
      ]
    }
    this.tabela2 = {
      tableHead: ['Medida da circunferência abdominal em mulheres adultas'],
      tableData: [
        ['Ideal', 'Menor que 80 cm'],
        ['Risco elevado', 'Maior que 80 cm'],
        ['Risco muito elevado', 'Maior que 88 cm']
      ]
    }
  }

  state ={
  altura: 0,
  massa: 0,
  resultadoNumero: 0,
  resultadoTexto: ""
  };

  handleCalculate = () => {
      this.state.massa = this.state.massa.replace(",",".");
      this.state.altura = this.state.altura.replace(",",".");
    
      if ((this.state.altura != 0 && this.state.massa != 0) && (this.state.altura > 0 && this.state.massa > 0)) { 
      
        let imc = (this.state.massa)/(this.state.altura * this.state.altura); // verificar condição
      this.setState({
        resultadoNumero: imc.toFixed(2)
      });
        if (imc >= 18.5 && imc <= 24.9){
        this.setState({ resultadoTexto:
        "Adequado"});
        } else if (imc > 24.9 && imc < 29.99){
          this.setState({ resultadoTexto: 
          "Sobrepeso"});
        } else if (imc>=30){
          this.setState( { resultadoTexto: 
          "Obesidade"})
        } else if (imc>0 && imc <18.5) {
        this.setState( { resultadoTexto: 
            "Abaixo"})
        }
        else{
          Alert.alert('Valor inválido inserido', null, [
            {text: 'OK'}
          ],
          {cancelable: false})
          this.setState({resultadoNumero: "NULL"}) 
          this.setState( { resultadoTexto: 
            "ERROR"})}
    } else{
      Alert.alert('Valor inválido inserido', null, [
        {text: 'OK'}
      ],
      {cancelable: false})
      this.setState({resultadoNumero: "NULL"})
      this.setState( { resultadoTexto: 
        "ERROR"})}
  }
    render(){
      var {height, widht} = Dimensions.get('window')
      const tabela1 = this.tabela1;
      const tabela2 = this.tabela2;
    
      
      //Teste
      //console.log(this.state);
      
      return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoTitulo}>Mantenha o peso normal para prevenir sobrepeso e 
        obesidade</Text>
        
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 200, height: 200}} source={require('../../assets/images/peso1.jpg')}/>
          </View>
        
        <Text style={styles.textoSubtitulo}>Durante o envelhecimento feminino, ocorre redução do 
        metabolismo. No climatério, o ganho de peso chega a 800 gramas por ano, podendo haver um aumento 
        de até 20% na gordura corporal. Manter-se ativa ou em movimento colabora para acelerar o 
        metabolismo e diminuir o ganho de peso (BRASIL, 2010).</Text>
        
        <Text style={styles.textoSubtitulo}>Para saber se seu peso está adequado, calcule seu índice de 
        massa corporal (IMC). </Text>
        
        <Text style={styles.textoSubtitulo}>Clique abaixo e insira sua altura e massa respectivamente: </Text>
        <View style={{padding:10}}>
  
        <TextInput
            placeholder="Massa (exemplo: 50.5)"
            keyboardType="decimal-pad"
            maxLength={6}
            style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#9268D0'}}
            onChangeText={massa => {
              this.setState({ massa });
            }}
        />
        <TextInput
          placeholder="Altura (exemplo: 1.53)"
          keyboardType="decimal-pad"
          maxLength={5}
          style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#9268D0'}}
          onChangeText={altura => {this.setState({ altura });}}
          />
        </View>

        <Button
          title="Calcular"
          onPress={this.handleCalculate}
          color="#9268D0"
        />
        
        <View>
        <Text style={{textAlign: "center", fontSize: 20}}>{this.state.resultadoNumero}</Text>
        <Text style={{textAlign: "center", fontSize: 20}}>
          {this.state.resultadoTexto}
        </Text>
        </View>


        <View style={styles.tabelaStyleContainer}>
        <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
        <Row data={tabela1.tableHead} style={styles.tabelaStyleHead} textStyle={styles.tabelaStyleText}/>
        <Rows data={tabela1.tableData} textStyle={styles.tabelaStyleText}/>
        </Table>
        </View>

          <Text style={styles.textoSubtitulo}>A medida da circunferência abdominal (medida da cintura) 
          permite conhecer o risco de desenvolver doenças do coração e diabetes.</ Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 200, height: 200}} source={require('../../assets/images/peso2.jpg')}/>
          </View>

          

          <View style={styles.tabelaStyleContainer}>
          <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
          <Row data={tabela2.tableHead} style={styles.tabelaStyleHead} textStyle={styles.tabelaStyleText}/>
          <Rows data={tabela2.tableData} textStyle={styles.tabelaStyleText}/>
          </Table>
          </View>

          <Text style={styles.textoSubtitulo}>•	As mulheres acima do peso, ou seja, com índice de massa 
          corporal (IMC) de 25 a 29,9 kg/m², devem realizar um mínimo de 60 a 90 minutos de atividade 
          física moderada, preferencialmente todos os dias da semana (LEE et al., 2017).</ Text>
          <Text style={styles.textoSubtitulo}>•	Mulheres obesas devem realizar 300 minutos de atividade 
          física por semana para reduzir a gordura corporal total (FRIEDENREICH et al., 2015).</ Text>
      </View>
      </ScrollView>
      );
    }
}

export default TextMassa;