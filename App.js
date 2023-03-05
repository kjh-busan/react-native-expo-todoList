import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import Header from './Header'
import Body from './Body'

export default class App extends React.Component {
  state = {
    todos : []
  }

  addTodo = (todo) => {
    // console.log("todo value: " + todo);
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    }
// console.log("const newTodo value: " + newTodo);
    this.setState(prevState => ({
      todos: [
        newTodo,
        ...prevState.todos
      ]
    }));
    // console.log("App.js의state의todos value :" + this.state.todos.map((data) => data.text));    
  }

  checkTodo = (id) => {
    this.setState(prevState => {
      const [ todo ] = prevState.todos.filter(e => e.id === id);
      todo.completed = !todo.completed;
      return ({
        todos: [
          ...prevState.todos
        ]
      })
    });
  }
  
  deleteTodo = (id) => {
    console.log("id value: " + id);
    // this.setState(prevState => {
    //   return ({
    //     todos: [
    //       ...prevState.todos.filter(e => e.id !== id)
    //     ]
    //   })
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <Header addTodo={this.addTodo} />
        <Body todos={this.state.todos} checkTodo={this.checkTodo} />
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
