import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native"
import React, { useState } from "react"

const TodoHeader = () => {
  const [todo, setTodo] = useState("");
  const _TITLE = "KJH's Todo List"
  const _ADD = "추가하기"

  const onSubmitTask = () => {
    todo.trim().length === 0 ? alert("Please type todo") : setTodo(todo)
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        {_TITLE}
      </Text>
      <View style={styles.viewStyles}>
        {/* TextInput */}
        <TextInput style={styles.textInputStyles}
          placeholder="Add todo"
          onChangeText={setTodo}
          value={todo}
        />
        {/* Button */}
        <TouchableOpacity style={styles.buttonStyles}
        onPress={onSubmitTask}>
          <Text style={{ color: "white" }}>{_ADD}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoHeader

const styles = StyleSheet.create({
  viewStyles: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputStyles: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 5,
  },
  buttonStyles: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
  }
})