
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native';

export default function AddTask({ taskAddFunc }){

    const [task, setTask] = useState();

    // This function is used to update the list of todo items in the parent component
    const handleTaskAdd = () => {
        taskAddFunc(task);
        setTask(null); 
      };

    return (

        <View style={styles.addTask}>

            <TextInput style={styles.addTaskInput} placeholder='Add your task here...' placeholderTextColor="#000" value={task} onChangeText={text => setTask(text)} />

            <TouchableOpacity style={styles.addButton} onPress={() => handleTaskAdd()}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
    addTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        borderRadius: 15,
        marginBottom: 10
      },
    
    addTaskInput: {
        color: '#000',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: 285,
        borderWidth: 2,
        borderColor: "#4B0082",
        fontFamily: 'Manrope-Regular'
    },

    addButton: {
        paddingVertical: 5
    },  

    addButtonText: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center'
    }

})