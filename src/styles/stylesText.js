import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexGrow: 1,
      //backgroundColor: 'black',
      justifyContent: 'flex-start',
    },
    textoTitulo: {
        padding: 10,
        paddingLeft: 10,
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    textoSubtitulo:{
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      color: 'black',
      fontSize: 20,
      textAlign: 'justify',
    },
    textoSubtituloL:{
      padding: 10,
      paddingLeft: 40,
      paddingRight: 30,
      color: 'black',
      fontSize: 20,
      textAlign: 'justify',
    },
    textoLegenda:{
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      color: 'black',
      fontSize: 15,
      textAlign: 'justify',
    },
    textoLinkingSite:{
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      color: 'blue',
      fontSize: 20,
      textAlign: 'justify',
    },
    textoQL:{
      color: 'white',
    },
    buttonStyle:{
      margin: 20,
      justifyContent: 'space-between',
    },
    resultadoStyle:{
      justifyContent: 'center',
    },
    tabelaStyleContainer: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    tabelaStyleHead: { height: 40, backgroundColor: '#9268D0'},
    tabelaStyleText: { margin: 6, textAlign: "center" }, 
    
  });

  export default styles ;
  