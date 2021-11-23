import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import Todo from "./components/Todo";

export default function App() {
  const [Tareas, setTareas] = useState([]);
  const [Texto, setTexto] = useState("");

  const newTarea = () => {
    if (Texto == "") return;
    setTareas([...Tareas, Texto]);
    setTexto("");
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor= {'white'} barStyle="dark-content"/>
      <Text style={styles.tittle}>My Todo List</Text>
      <ScrollView>
        {Tareas.map((value, index) => {
          return (<Todo Texto={value} key={index}/>);
        })}
      </ScrollView>
      <View style={styles.form}>
        <TextInput
          placeholder="Tarea nueva"
          style={styles.textinput}
          maxLength={50}
          value={Texto}
          onChangeText={(value)=> setTexto(value)}
        />
        <TouchableOpacity style={styles.addTodo} onPress={() => newTarea()}>
          <Text style={{ color: "white" }}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#BBF2FB",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  textinput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginRight: 8,
    borderRadius: 4
  },
  addTodo: {
    backgroundColor: "#4398E7",
    padding: 8,
    borderRadius: 4,
  },
  tittle:{
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4398E7',
    fontSize: 50,
    fontStyle:'italic',
    textDecorationLine: 'underline'
  },
});
