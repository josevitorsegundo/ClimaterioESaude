import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Accessing view manager']);

//Import das screens
import ChamaDiario from '../screens/ChamaDiario';
import CuidadosPage from '../screens/CuidadosPage';
import ChamaTextGeral from '../screens/ChamaTextGeral';
import EstiloVida from '../screens/ChamaEstiloVida';
import ChamaCalendario from '../screens/ChamaCalendario';

//var {width} = Dimensions.get('window');

const RootStackG = createStackNavigator({
  Cuidados: CuidadosPage,
  TextMostraGeral: ChamaTextGeral,
  Estilo: EstiloVida,
  Diário: ChamaCalendario,
  Notas: ChamaDiario,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#9268D0',//'#B665A0',//
     
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      //width: Dimensions.get('window'),
    },
  },
}
);

const Routes = createAppContainer(RootStackG);
export default Routes;
