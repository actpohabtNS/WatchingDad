import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ text, routeName, navigation, passedStyle }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={passedStyle}>
            <Text style={styles.link}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    link: {
        color: "#597EAA",
        fontSize: 18,
        lineHeight: 24,
        alignSelf: "center"
    }
})

export default withNavigation(NavLink);