import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

export default function App() {

  const [todos, setTodos] = useState([])

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

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title={'Todo App'} />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList 
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => {
            return <Todo todo={item} onRemove={removeTodo} />
          }}
        />
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
