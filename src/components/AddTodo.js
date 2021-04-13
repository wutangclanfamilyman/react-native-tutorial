import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Keyboard, Alert} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        }
        else {
            Alert.alert('Field not must be empty')
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input} onChangeText={text => setValue(text)} value={value} placeholder={'Enter todo title...'} autoCorrect={false} autoCapitalize={'none'} />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Add
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: '70%',
        height: 40,
        fontSize: 16,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#d0d0d0'
    }
})