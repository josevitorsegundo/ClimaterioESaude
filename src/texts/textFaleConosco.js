import React from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; // remover senão der certo
import {Picker} from '@react-native-picker/picker';
import email from 'react-native-email';
import styles from '../styles/stylesText';
 
class TextFaleConosco extends React.Component {
    /** 
    state ={
        email: "",
        categoria : [
            {
                label: 'Outro',
                value: 'outro',
            },
            {
                label: 'Dúvida',
                value: 'duvida',
            },
            {
                label: 'Sugestão/Reclamação',
                value: 'sugRecl',
            },
        ]
    };*/

    constructor(props){
        super(props);

        this.values = {
           tipoValue: undefined, 
        }
    };

    state = {
                language: 'java',
    };

    render() {

        console.log(this.state);
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
            
            <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Text></Text>

            <View style={stylesB.container}>
                <Button 
                title="Enviar E-mail" onPress={this.handleEmail}
                color="#9268D0"
                />
            </View>
            
            </View>
            </ScrollView>
        )
    }

 
    handleEmail = () => {
        //console.log("handleEmail",this.state.email)
        
        const to = ['desenvolvimentoprojetos2020@gmail.com'] // string or array of email addresses - destinatario
        email(to, {
            // Optional additional arguments
            //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: this.state.email, // string or array of email addresses - remetente
            subject: 'Dúvida', // - Assunto
            body: 'Uma dúvida' // - mensagem
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