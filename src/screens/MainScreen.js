import React, {useState, useEffect, useContext, useCallback} from 'react'
import {StyleSheet, View, FlatList, Image, Text, Dimensions} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
import { AppLoader } from '../components/ui/AppLoader'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { THEME } from '../theme'


export const MainScreen = () => {

    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 20);

    const loadTodos = useCallback( async () => {
        await fetchTodos(), [fetchTodos]
    })

    useEffect(() => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - 20;
            setDeviceWidth(width);
        }
        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })

    if(loading) {
        return <AppLoader />
    }

    if(error) {
        return <View style={styles.center}>
                    <AppText style={styles.error}>{error}</AppText>
                    <AppButton style={styles.retry} color={THEME.DARK_COLOR} onPress={loadTodos}>Retry</AppButton>
                </View>
    }

    let content = 
    <View style={{width: deviceWidth}}>
        <FlatList keyExtractor={item => item.id.toString()}
            data={todos} renderItem={({item}) => {
                return <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
        }}/>
    </View>

    if(todos.length === 0) {
        content = (
        <View style={styles.imgWrap}>
            <Image style={styles.img} source={require('../../assets/no-items.jpg')} />
            <Text style={styles.imgTitle}>No data</Text>
        </View>)
    }

    return <View>
        <AddTodo onSubmit={addTodo} />
        {content}
    </View>
}

const styles = StyleSheet.create({
    imgWrap: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    imgTitle: {
        marginTop: 10,
        fontSize: 20
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        fontSize: 20,
        color: THEME.DANGER_COLOR,
        textAlign: 'center',
        marginBottom: 15
    }
})