import React, {useState} from "react";
import { View, Text,TouchableOpacity, StyleSheet } from "react-native";

const Todo = ({Texto}) =>{
    const [check, setCheck] = useState(false)

    return(
        <View style={Estilo.Todo}>
            <TouchableOpacity style={{...Estilo.Check,
            backgroundColor: (check)?'#3BE67C':'#D13030'}}
            onPress= {() =>setCheck(!check)}/>
            <Text style={Estilo.Text}>{Texto}</Text>
        </View>
    )
}

export default Todo;

const Estilo = StyleSheet.create({
    Todo:{
        borderWidth: 1,
        borderColor: '#4398E7',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 8,
        margin: 8,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    Text:{
        fontSize: 16,
        flex: 1,
        color: 'black'
    },
    Check:{
        width: 30,
        height: 30,
        backgroundColor: 'white',
        marginRight: 8, borderRadius: 15
    }
})