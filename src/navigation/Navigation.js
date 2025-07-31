import { NavigationContainer } from '@react-navigation/native'; // Importa el contenedor de navegación
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa el creador de stack navigator

import Home from '../screens/Home.js'; // Importa la pantalla de Sesión
import ShowUser from '../screens/ShowUser.js'; // Importa la pantalla de Sesión
import AddUser from '../screens/AddUser.js'; // Importa la pantalla de Sesión
import TabNavigator from './TabNavigator'; // Importa el navegador de pestañas
import LoginScreen from '../screens/LoginScreen.js';

export default function Navigation() {

  const Stack = createNativeStackNavigator(); // Crea una instancia del stack navigator

  return (
    <NavigationContainer> 
      <Stack.Navigator
        initialRouteName='Login' 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Home" component={Home} /> 

        <Stack.Screen name="ShowUser" component={ShowUser} /> 
        <Stack.Screen name="AddUsers" component={AddUser} /> 
        <Stack.Screen name="TabNavigator" component={TabNavigator} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}