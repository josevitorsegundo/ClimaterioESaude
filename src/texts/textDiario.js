import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Text, View, ScrollView, TextInput, Dimensions, Button, Icon } from 'react-native';
import styles from '../styles/stylesText';
import {AsyncStorage} from 'react-native';

//Funcionalidade 1: ter alarme com data definida pelo usuário
//Funcionalidade 2: ter diário para escrever de acordo com definido pelo usuário

class TextDiario extends Component {
 
  state ={
    entradaTest:'Tem algo aqui',
    entrada: '',
    massa: 0,
    resultadoNumero: 0,
    resultadoTexto: "",
    limite: null,
    page: 0,
    pageTest: ['Valor 1','Valor 2'],
    pages: [
      {
        info: 'Aqui jaz meu diario'
      }
    ],
  };
  verifLengthText = (text) =>{
    this.setState({ entrada: text })
    if(String(text).length === 10){
      alert("Tamanho Maximo Atingido")
    }else{
      var pages = this.state.pages
      pages[this.state.page].info = text
      this.setState({
        pages: pages        
      })
    }
  }
  
  _storeData = async () => {
    try {
      var i = 0
      while (true){
        const value = await AsyncStorage.getItem('pages' + i);
        if (value !== null) {
          AsyncStorage.removeItem('pages' + i)
          i += 1
        }else{
          break
        }
      }
    } catch (error) {
      console.log('error no deletar')
    }
    try{
      console.log(this.state.pages)
      for(i in this.state.pages){
        if(this.state.pages[i].info == ''){
          await AsyncStorage.setItem('pages' + i,"nill");
        }else{
          await AsyncStorage.setItem('pages' + i,this.state.pages[i].info);
        }
        console.log(this.state.pages[i].info)
      }
      console.log('salvo')
    } catch (error){
      console.log('error no salvar')
    }
}

_retrieveData = async () => {
    try {
      var list = [], i = 0
      while (true){
        const value = await AsyncStorage.getItem('pages' + i);
        if (value !== null) {
          if(value == 'nill'){
            list[i] = {info: ''}
          }else{
            list[i] = {info: value}
          }
          i += 1
          console.log(value);
        }else{
          break
        }
      }
      this.setState({
        pages: list,
        page: 0
      })
    } catch (error) {
      // Error retrieving data
      console.log('error no receber')
    }
  };
  
  backOrNext = (textChoice) =>{
    if(textChoice){
      if(this.state.pages.length > this.state.page+1){
        this.setState({
          page: this.state.page + 1
        })
      }
    } else {
      if(0 < this.state.page){
        this.setState({
          page: this.state.page - 1
        })
      }
    }
  }
  addPage = () =>{
    var pages = this.state.pages
    pages[pages.length] = {info : ''}
    this.setState({
      pages: pages
    })
  }
  remPage = () =>{
    var pages = this.state.pages
    if(pages.length > 1){
      var i = this.state.page
      while(i < pages.length-2){
        pages[i] = pages[i+1]
        i += 1
      }
      this.setState({
        pages: pages
      })
      pages.pop()
      console.log(pages)
    }
  }
  componentDidMount = async() =>{
    this._retrieveData()
  }
  render(){
    var {heigt, width} = Dimensions.get("window");
    return (
      <ScrollView>
      <View style={styles.container + {width:width}}>
          <Text style={styles.textoTitulo}>Escreva aqui o seu diário: </Text>
          
          <TextInput
          multiline={true}
          maxLength={20}
          placeholder="Digite aqui"
          defaultValue={this.state.pages[this.state.page].info}
          keyboardType="default"
          style={{textAlignVertical: "top", fontSize: 20, borderWidth: 1, borderColor: '#B665A0', minHeight: 200 }}
          onChangeText={entrada=> this.verifLengthText(entrada)}
          />

          <View style={{flexDirection:"row"}}>
            <Button
            title="<-"
            
            onPress={() => this.backOrNext(false)}
            color="#B665A0"
            />
            <Button
            title="Adicionar pagina"

            onPress={() => this.addPage()}
            color="#B665A0"
            />
            <Text style={{paddingHorizontal: 5, fontSize:25, backgroundColor: "#B665A0", color: "#FFFFFF"}}>{this.state.page + 1}</Text>
            <Button
            title="Remover pagina"
       
            onPress={() => this.remPage()}
            color="#B665A0"
            />
            <Button
            title="->"
          
            onPress={() => this.backOrNext(true)}
            color="#B665A0"
            />
          </View>
          <Button
          title="Salvar"
          onPress={()=>this._storeData()}
          color="#B665A0"
          />

          <Button
          title="Mostrar"
          onPress={()=>this._retrieveData()}
          color="#B665A0"
          />
      </View>
      </ScrollView>
    );
  }
}

export default TextDiario;