import React from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import email from 'react-native-email';
import styles from '../styles/stylesText';
 
class TextFaleConosco extends React.Component {
    
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
    };

    constructor(props){
        super(props);

        this.values = {
           tipoValue: undefined, 
        }
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
            <RNPickerSelect
            placeholder={{}}
                items={this.state.categoria}
                onValueChange={value => {
                this.setState({
                    tipoValue: value,
                });
                }}
                InputAccessoryView={() => null}
               /* style={pickerSelectStyles}*/
                value={this.state.tipoValue}
            />

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