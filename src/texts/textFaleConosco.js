import React from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TextInput, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import email from 'react-native-email';
import styles from '../styles/stylesText';
 
class TextFaleConosco extends React.Component {
    
    state ={
        email: "",
        tipo: 'outro',
        mensagem: "Sua mensagem",
    };

    constructor(props){
        super(props);

        this.values = {
           tipoValue: undefined, 
        }
    };

    verifLengthText = (text) =>{
        this.setState({ mensagem: text })
        if(String(text).length === 300){
          Alert.alert("Aviso","Tamanho máximo de mensagem atingido")
        }else{
          this.setState({
            mensagem:text
          })
        }
    }

    render() {

        //console.log(this.state);
        return (
            <ScrollView>
            <View style={styles.container}> 

            <Text></Text>
            <Text style={styles.textoSubtitulo}>E-mail</Text>
            <TextInput
                placeholder="Seu e-mail"
                keyboardType="email-address"
                style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#9268D0'}}
                onChangeText={email => {this.setState({ email });
                }}
            />
            {/*{console.log("Valor", this.state.email)}*/}

            <Text></Text>
            <Text style={styles.textoSubtitulo}>Tipo</Text>
            
            <View style = {stylesB.container}>
            <Picker
                selectedValue={this.state.tipo}
                style={{height: 50, width: 300, borderStyle: 'visible', borderBottomColor:'#9268D0' }}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({tipo: itemValue})
                }>
                <Picker.Item label="Outro" value="outro" />
                <Picker.Item label="Dúvida" value="duvida" />
                <Picker.Item label="Sugestão/Reclamação" value="sugRecl" />
                
            </Picker>
            </View>

            <Text></Text>
            <Text style={styles.textoSubtitulo}>Mensagem</Text>

            <TextInput
                placeholder="Sua mensagem"
                keyboardType="default"
                multiline
                maxLength={300}
                numberOfLines={4}
                style={{textAlign: "center", fontSize: 20, borderWidth: 1, borderColor: '#9268D0'}}
                onChangeText={mensagem => {this.verifLengthText(mensagem)}}
            />

            <Text></Text>

            <View style={stylesB.container}>
                <Button 
                title="Enviar E-mail" onPress={this.handleEmail}
                color="#9268D0"
                />
            </View>

            <Text></Text>
            
            </View>
            </ScrollView>
        )
    }
 
    handleEmail = () => {
        
        
        // E-mail não pode ser Null
        // Mensagem com no minimo 3 caracteres

        var valorTipo1 = "null"
        if (this.state.tipo == "duvida"){
            valorTipo1 ="Dúvida"
        }   else if (this.state.tipo == "sugRecl") {
            valorTipo1 ="Sugestão/Reclamação"
        }   else {
            valorTipo1 ="Outro"
        }

        //console.log(this.state.tipo," " , valorTipo1)

        //console.log("handleEmail",this.state.email)
        
        const to = ['desenvolvimentoprojetos2020@gmail.com'] // string or array of email addresses - destinatario
        email(to, {
            // Optional additional arguments
            //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: this.state.email, // string or array of email addresses - remetente
            subject: valorTipo1, // - Assunto
            body: this.state.mensagem // - mensagem
        }).catch(console.error)
    }


}
 
const stylesB = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TextFaleConosco;