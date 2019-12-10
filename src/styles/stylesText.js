import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'black',
      justifyContent: 'flex-start',
    },
    textoTitulo: {
        padding: 10,
        paddingLeft: 10,
        color: 'black',
        fontSize: 20,
    },
    textoSubtitulo:{
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      color: 'black',
      fontSize: 15,
      textAlign: 'justify',
    },
    buttonStyle:{
      margin: 20,
      justifyContent: 'space-between',
    },
    resultadoStyle:{
      justifyContent: 'center',
    },
  });

  export default styles ;
  