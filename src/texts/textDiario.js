import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, Button, Icon, Alert, FlatList } from 'react-native';
import styles from '../styles/stylesText';
import {AsyncStorage} from 'react-native';

//Funcionalidade 1: ter alarme com data definida pelo usuário
//Funcionalidade 2: ter diário para escrever de acordo com definido pelo usuário

class TextDiario extends Component {
  constructor(props){
    super(props)
    this.state = {
      props: props.date,
      entrada: '',
      limite: null,
      page: 0,
      pages: [
        {
          info: 'Seu diário'
        }
      ],
    }
  }
  verifLengthText = (text) =>{
    this.setState({ entrada: text })
    if(String(text).length === 200){
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
    date = 'D' + this.state.props.day + 'M' + this.state.props.month + 'Y'  + this.state.props.year
    try {
      var i = 0
      while (true){
        const value = await AsyncStorage.getItem(date + 'pages' + i);
        if (value !== null) {
          AsyncStorage.removeItem(date + 'pages' + i)
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
          await AsyncStorage.setItem(date + 'pages' + i,"nill");
        }else{
          await AsyncStorage.setItem(date + 'pages' + i,this.state.pages[i].info);
        }
      }
      console.log('salvo')
    } catch (error){
      console.log('error no salvar')
    }
}

_retrieveData = async () => {
    try {
      var list = this.state.pages, i = 0
      date = 'D' + this.state.props.day + 'M' + this.state.props.month + 'Y'  + this.state.props.year
      while (true){
        const value = await AsyncStorage.getItem(date + 'pages' + i);
        if (value !== null) {
          if(value == 'nill'){
            list[i] = {info: ''}
          }else{
            list[i] = {info: value}
          }
          i += 1
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
    Alert.alert('Página adicionada', null, [
      {text: 'OK', onPress: () => console.log('Ok pressed')}
    ],
    {cancelable: false})
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
      if(pages.length == this.state.page + 1){
        this.setState({
          page: this.state.page-1
        })
      }
      pages.pop()
      Alert.alert('Página removida', null, [
        {text: 'OK', onPress: () => console.log('Ok pressed')}
      ],
      {cancelable: false})
    }
  }
  componentDidMount = async() =>{
    this._retrieveData()
  }
  render(){
    var pagesQuant = this.state.pages;
    var {heigt, width} = Dimensions.get("window");
    return (
      <ScrollView>
      <View style={styles.container + {width:width}}>
          <Text style={styles.textoTitulo}>Escreva aqui o seu diário: </Text>
          <TextInput
          multiline={true}
          maxLength={200}
          placeholder="Digite aqui"
          defaultValue={this.state.pages[this.state.page].info}
          keyboardType="default"
          style={{textAlignVertical: "top", fontSize: 20, borderWidth: 1, borderColor: '#9268D0', minHeight: 200 }}
          onChangeText={entrada=> this.verifLengthText(entrada)}
          />
          
          {/*
          <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
          />*/}
          
          

          <View style={{flexDirection:"row", alignItems: "center"}}>
            <Button
            title="<-"
            disabled={this.state.page == 0}
            onPress={() => this.backOrNext(false)}
            color="#9268D0"
            />
            
            <Button
            title="Adicionar pagina"
            onPress={() => this.addPage()}
            color="#9268D0"
            />
            
            
              <View style={{flexDirection:"row", alignItems: "center"}}>
               <Text style={{paddingHorizontal: 5, fontSize:25, backgroundColor: "#9268D0", 
                color: "#FFFFFF"}}>{this.state.page + 1}-{pagesQuant.length}</Text>
             
              </View>
            

            <Button
            title="Remover pagina"
            onPress={() => this.remPage()}
            color="#9268D0"
            />
            
            <Button
            title="->"
            disabled={this.state.page + 1 == this.state.pages.length}
            onPress={() => this.backOrNext(true)}
            color="#9268D0"
            />
          </View>
          
          <Button
          title="Salvar"
          onPress={()=>this._storeData()}
          color="#9268D0"
          />
      </View>
      </ScrollView>
    );
  }
}

export default TextDiario;