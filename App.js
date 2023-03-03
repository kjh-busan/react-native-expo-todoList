import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
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
    this.setState(prevState => {
      const todos = [
        newTodo,
        ...prevState.todos
      ];
      AsyncStorage.setItem("todos", JSON.stringify(todos));
      return { todos }
    });
  }

  checkTodo = (id) => {
    this.setState(prevState => {
      const [ todo ] = prevState.todos.filter(e => e.id === id);
      todo.completed = !todo.completed;
      const todos = [
        ...prevState.todos
      ];
      AsyncStorage.setItem("todos", JSON.stringify(todos));
      return ({ todos })
    });
  }
  
  removeTodo = (id) => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex(e => e.id === id);
      prevState.todos.splice(index, 1);
      const todos = [
        ...prevState.todos
      ];
      AsyncStorage.setItem("todos", JSON.stringify(todos));
      return ({ todos })
    });
  }

  componentDidMount = () => {
    AsyncStorage.getItem("todos").then(data => {
      const todos = JSON.parse(data || '[]');
      this.setState({ todos });
    });
  };

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
