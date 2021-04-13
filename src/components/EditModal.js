import React, {useState} from 'react'
import {} from '@expo/vector-icons'
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({visible, onCancel, value, onSave}) => {

    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert('Error!', `Minimal length of title 3, now ${title.trim().length} symbols`)
        }
        else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType={'slide'} transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder={'Enter title...'} autoCapitalize='none' autoCorrect={false} maxLength={64} />
                <View style={styles.buttons}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={onCancel}>Cancel</AppButton>
                    <AppButton color={THEME.GREY_COLOR} onPress={saveHandler}>Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.BORDER_TODO_COLOR,
        borderBottomWidth: 2,
        width: '80%',
        fontSize: 18
    },
    buttons: {
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})