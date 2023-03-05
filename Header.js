import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import App from './App';

// export default function Header() {
const Header = () => {

  // state = {
  //     newTodo: '',
  // };
  const [ newTodo, setNewTodo ] = useState('');

  // addNewTodo = () => {
  //   if(newTodo.trim().length > 0) {
  //     // console.log("newTodo : " + newTodo);
  //     addTodo(newTodo);
  //     setState({
  //       newTodo: ''
  //     });
  //     // console.log("text.lenght: "+ newTodo.trim().length);
  //   } else {
  //     alert("please input text");
  //     setState({
  //       newTodo: ''
  //     });
  //   }
  // };

  const addTodo = (todo) => {
    // console.log("todo value: " + todo);
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    }
// console.log("const newTodo value: " + newTodo);
    setTodos(prevState => ({
      todos: [
        newTodo,
        ...prevState.todos
      ]
    }));
    // console.log("App.js의state의todos value :" + state.todos.map((data) => data.text));    
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}> 
        <TextInput 
          style={styles.inputText}
          placeholder='Enter new todo'
          autoCorrect={ false }
        />
        <TouchableOpacity>
          <MaterialCommunityIcons style={styles.addBtn} size={30} name='plus-circle' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputText: {
        flex: 1,
    },
    addBtn: {
        color: '#4169E1'
    }
});

export default Header;
