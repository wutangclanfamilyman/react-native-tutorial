import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {THEME} from '../theme'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        backgroundColor: THEME.MAIN_COLOR
    },
    text: {
        fontSize: 20
    }
})