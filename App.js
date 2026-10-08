import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ProductDetails from './src/screens/ProductDetails';
import GroupInfo from './src/screens/GroupInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />

        {/* Tela Home */}
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            title: 'Produtos',
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => navigation.replace('Login')} 
                style={styles.headerButton}
              >
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('GroupInfo')} 
                style={styles.headerButton}
              >
                <Text style={styles.infoText}>Informações</Text>
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          })}
        />

        {/* Tela de Detalhes */}
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetails} 
          options={{ title: 'Detalhes do Produto' }} 
        />

        {/* Tela de Informações do Grupo */}
        <Stack.Screen 
          name="GroupInfo" 
          component={GroupInfo} 
          options={{ title: 'Informações do Grupo' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  logoutText: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoText: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 14,
  },
});