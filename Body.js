import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Body extends Component {
  render() {
    return (
      <View style={styles.container} >
        {
          this.props.todos.map(data => (
            <View style={styles.todo} key={data.id}>
              <View style={styles.todoText}>
                <TouchableOpacity style={styles.todoCheckbox} 
                  onPressOut={() => this.props.checkTodo(data.id)}
                >
                {
                  data.completed
                  ? <MaterialCommunityIcons size={20} name='checkbox-marked-circle-outline' />
                  : <MaterialCommunityIcons size={20} name='checkbox-blank-circle-outline' />
                }
                </TouchableOpacity>
                <Text style={[data.completed ? styles.todoCompleted : null]}>{data.text}</Text>
              </View>
              {
                data.completed
                ? <TouchableOpacity onPressOut={this.props.removeTodo(data.id)}>
                    <MaterialCommunityIcons style={styles.todoDelBtn} size={30} name='delete-outline' />
                  </TouchableOpacity>
                : null
              }
          </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  todo: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  todoCheckbox: {
    marginRight: 5,
  },
  todoText: {
    flexDirection: 'row',
  },
  todoDelBtn: {
    color: '#777'
  },
  todoCompleted: {
    color: "#bbb",
    textDecorationLine: "line-through"
  }
});

export default Body;
