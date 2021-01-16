import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'

import UserForm from '../components/UserForm'
import NavLink from '../components/NavLink'
import st_g from '../styles'

import { nameChanged, emailChanged, passwordChanged, signupUser, toDefault } from '../actions'

const SignupScreen = (props) => {
  const { name, email, password, loading, error, nameChanged, emailChanged, passwordChanged, signupUser, toDefault } = props

  return (
    <SafeAreaView style={{ flex: 1}}>
      
      <View style={{ flex: 1}}>
        <UserForm
          title="Sign Up"
          buttonText="Sign Up"
          buttonLoading={loading}
          onSubmit={() => signupUser({ email, password })}
        >
          <Input
            placeholder="John"
            label="Your Name"
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey' }}
            onChangeText={nameChanged}
            value={name}
          />

          <Input
            placeholder="email@address.com"
            label="Your Email Address"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'grey' }}
            onChangeText={emailChanged}
            value={email}
          />

          <Input
            secureTextEntry
            placeholder="Password"
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey' }}
            onChangeText={passwordChanged}
            value={password}
          />

          { error
          ? <Text style={st_g.errorMessage}>{error}</Text>
          : null }

        </UserForm>

        <NavLink
          text="Already have an account? Sign In!"
          routeName="Signin"
          callback={toDefault}
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

const mapStateWithProps = state => ({ ...state.auth })

export default connect(mapStateWithProps, { nameChanged, emailChanged, passwordChanged, signupUser, toDefault })(SignupScreen);