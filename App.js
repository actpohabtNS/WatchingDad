import React, { useEffect } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import useInitAuth from './src/hooks/useInitAuth'

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import LocationScreen from './src/screens/LocationScreen'
import AreasScreen from './src/screens/AreasScreen'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'

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
  useEffect(() => {
    useInitAuth();
  }, [])

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  )
}