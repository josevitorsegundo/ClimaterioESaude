import React from 'react'
import { StyleSheet, Button, View, ScrollView } from 'react-native'
import email from 'react-native-email'
 
class TextFaleConosco extends React.Component {
    render() {
        return (

            <ScrollView>
            
            <View style={styles.container}>
                <Button title="Send Mail" onPress={this.handleEmail} />
            </View>
            
            </ScrollView>
        )
    }
 
    handleEmail = () => {
        const to = ['josevitorsegundo2@gmail.com', 'josevitorsegundo@hotmail.com'] // string or array of email addresses - destinatario
        email(to, {
            // Optional additional arguments
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: 'josevitorsegundo2@gmail.com', // string or array of email addresses - remetente
            subject: 'Dúvida', // - Assunto
            body: 'Uma dúvida' // - mensagem
        }).catch(console.error)
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TextFaleConosco;