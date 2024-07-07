import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LogInScreen';
import SignUpScreen from '../screen/signUpScreen';
import SettingsScreen from '../screen/SettingScreen';
import DashBoard from '../screen/DashBoardScreen';

const Stack = createNativeStackNavigator();

export default class index extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})