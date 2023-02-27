import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header'
import Body from './Body'

export default class App extends React.Component {
  state = {
    todos: []
  }

  addTodo = (todo) => {
     
    const newTodo = {
      id: Date.now(), // 등록시간
      text: todo,      // 할일 내용
      completed: false, // 완료 여부
    }   

    this.setState(prevState => ({
      todos: [
        newTodo,       // 새로 추가된 할일(todo)
        ...prevState.todos // 기존의 할일 목록
      ]
    }));
    console.log(this.state.todos);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <Header addTodo={this.addTodo}/>
        <Body todo={this.state.todos} />
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
