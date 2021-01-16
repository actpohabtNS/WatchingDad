import React, { useEffect } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import LocationScreen from './src/screens/LocationScreen'
import AreasScreen from './src/screens/AreasScreen'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }, {
    initialRouteName: 'Signup',
    defaultNavigationOptions: {
      header: () => false
    },
  }),
  mainFlow: createBottomTabNavigator({
    Location: LocationScreen,
    Areas: AreasScreen,
  }, {
    initialRouteName: 'Location',
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    //<Provider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    //</Provider>
  )
}