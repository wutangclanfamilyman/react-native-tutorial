import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {

  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    
  ])

  const addTodo = (title) => {

    // const newTodo = {
    //   id: Date.now().toString(),
    //   title
    // }

    //setTodos(todos.concat([newTodo]))
  
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prevTodos => [...prevTodos, {
      id: Date.now().toString(),
      title
    }])
    
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if(todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  const removeTodo = id => {

    const todo = todos.find(t => t.id === id)

    Alert.alert(
      'Delete Item',
      `Are you sure want delete "${todo.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          style: 'destructive',
          text: 'Delete', onPress: () => {
            setTodoId(null)
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
          }
        }
      ]
    )
  }

  let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />

  if(todoId) {

    const selectedTodo = todos.find(item => {
      return item.id === todoId
    })
    
    content = <TodoScreen goBack={() => {setTodoId(null)}} todo={selectedTodo} onRemove={removeTodo} onSave={updateTodo} />
  }


  return (
    <View>
      <Navbar title={'Todo App'} />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
