import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header'
import Body from './Body'

export default class App extends React.Component {

  state = {
    todos: []
  }

  addTodo = (todo) => {
    
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    }   

    this.setState(prevState => ({
      todos: [
        newTodo,
        ...prevState.todos
      ]
    }));
    console.log(this.state.todos);
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <Header addTodo={this.addTodo}/>
        <Body todo={this.state.todos} checkTodo={this.checkTodo} />
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
