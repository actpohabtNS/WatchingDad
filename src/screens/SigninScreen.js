import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements'

import UserForm from '../components/UserForm'
import NavLink from '../components/NavLink'
import st_g from '../styles'

const SigninScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      
      <View style={{ flex: 1}}>
        <UserForm
          title="Sign In"
          buttonText="Sign In"
        >

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
          text="Don't have an account? Sign Up!"
          routeName="Signup"
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

export default SigninScreen;