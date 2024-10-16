
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TaskItem(props){

    return (

        <View style={styles.taskItem}>
            <Text style={styles.itemText}>{props.text}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>

    )

}


const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 15
    },

    button: {
        borderRadius: 7,
        padding: 10,
        backgroundColor: '#000',

    },

    buttonText: {
        color: '#fff'
    }
})