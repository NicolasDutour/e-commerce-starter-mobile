import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from './components/Products'
import ProductScreen from './components/Product'

const Stack = createStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Products"
               component={ProductsScreen}
               options={{ title: 'Produits' }}
            />
            <Stack.Screen
               name="Product"
               component={ProductScreen}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
