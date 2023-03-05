import React, { useState } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import Header from './Header'
import Body from './Body'

// export default class App extends React.Component {
const App = () => {
  const [todos, setTodos] = setTodos({});
  // state = {
  //   todos : []
  // }

  addTodo = (todo) => {
    // console.log("todo value: " + todo);
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    }
// console.log("const newTodo value: " + newTodo);
    setState(prevState => ({
      todos: [
        newTodo,
        ...prevState.todos
      ]
    }));
    // console.log("App.js의state의todos value :" + state.todos.map((data) => data.text));    
  }
  
  // removeTodo = (id) => {
  //   alert("id value: " + id);
  //   setState(prevState => {
  //     const [ todo ] = prevState.todos.filter(e => e.id === id);
  //     todo.completed = !todo.completed;
  //     return ({
  //       todos: [
  //         ...prevState.todos
  //       ]
  //     })
  //   });
  // }

  removeTodo = (id) => {
    console.log("id value from body.js ");
    setState(prevState => {
      const index = prevState.todos.findIndex(e => e.id === id);
      prevState.todos.splice(index, 1);
      return ({
        todos: [
          ...prevState.todos
        ]
      })
    });
  }
  checkTodo = (id) => {
    setState(prevState => {
      const [ todo ] = prevState.todos.filter(e => e.id === id);
      todo.completed = !todo.completed;
      return ({
        todos: [
          ...prevState.todos
        ]
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <Header addTodo={addTodo} />
        <Body todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  }
});

export default App;