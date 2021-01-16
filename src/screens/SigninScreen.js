import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'

import UserForm from '../components/UserForm'
import NavLink from '../components/NavLink'
import st_g from '../styles'

import { emailChanged, passwordChanged, signinUser, toDefault } from '../actions'

const SigninScreen = (props) => {
  const { email, password, loading, error, emailChanged, passwordChanged, signinUser, toDefault } = props;

  return (
    <SafeAreaView style={{ flex: 1}}>
      
      <View style={{ flex: 1}}>
        <UserForm
          title="Sign In"
          buttonText="Sign In"
          buttonLoading={loading}
          onSubmit={() => signinUser({ email, password })}
        >

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
          text="Don't have an account? Sign Up!"
          routeName="Signup"
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

export default connect(mapStateWithProps, { emailChanged, passwordChanged, signinUser, toDefault })(SigninScreen);