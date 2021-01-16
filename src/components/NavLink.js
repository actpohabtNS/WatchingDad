import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { call } from 'react-native-reanimated';
import { withNavigation } from 'react-navigation'

const NavLink = ({ text, routeName, navigation, callback, passedStyle }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(routeName);

                if (callback) callback();
            }}
            style={passedStyle}
        >
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