import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';

import UserForm from '../components/UserForm'
import NavLink from '../components/NavLink'
import st_g from '../styles'

const SignupScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      
      <View style={{ flex: 1}}>
        <UserForm
          title="Sign Up"
          buttonText="Sign Up"
        >
          <Input
            placeholder="John"
            label="Your Name"
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey' }}
          />

          <Input
            placeholder="email@address.com"
            label="Your Email Address"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'grey' }}
          />

          <Input
            secureTextEntry
            placeholder="Password"
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey' }}
          />

          { false
          ? <Text style={st_g.errorMessage}>Authentication failed!</Text>
          : null }

        </UserForm>

        <NavLink
          text="Already have an account? Sign In!"
          routeName="Signin"
          passedStyle={styles.navLinkStyle}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  navLinkStyle: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
})

export default SignupScreen;