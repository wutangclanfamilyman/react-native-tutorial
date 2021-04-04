import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
        backgroundColor: '#d0d0d0'
    },
    text: {
        fontSize: 20
    }
})