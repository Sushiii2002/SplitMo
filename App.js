import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { 
  StyleSheet, Text, View, Platform, 
  StatusBar, Image, TouchableOpacity, 
  TouchableHighlight,  TouchableWithoutFeedback, 
  SafeAreaView, Button, Alert, Dimensions,
  ImageBackground, AppRegistry } from 'react-native';

import  WelcomeScreen from './app/screens/auth/WelcomeScreen';
import  LoginScreen from './app/screens/auth/LoginScreen';
import  RegisterScreen from './app/screens/auth/SignUpScreen';
import SignUpScreen from './app/screens/auth/SignUpScreen';
import DashboardScreen from './app/screens/dashboard/DashboardScreen';
//comment

/*reactnative.dev
docs.expo.dev
https://www.youtube.com/watch?v=0-S5a0eXPoc*/

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <DashboardScreen/>
        </NavigationContainer>
    );
}



/* <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
*/
    