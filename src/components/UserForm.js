import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

import st_g from '../styles'

const UserForm = ({ title, buttonText, onSubmit, children }) => {
  return (
    <View style={[st_g.marHor, st_g.marVer, styles.container, ]}>
      <Text h2 style={{ textAlign: 'center', paddingBottom: 20 }}>{title}</Text>

      <View>
        { children }
      </View>

      <Button
        raised
        type="solid"
        title={buttonText}
        onPress={onSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  }
})

export default UserForm;