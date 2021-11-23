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
    borderTopWidth: 1,
    borderColor: "#320FCC",
    alignItems: "center",
  },
  textinput: {
    flex: 1,
    backgroundColor: '#C7C7C7',
    padding: 8,
    marginRight: 8,
    borderRadius: 4
  },
  addTodo: {
    backgroundColor: "#4398E7",
    padding: 8,
    borderRadius: 4,
  },
});
