
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TaskItem(props){


    // Handler to delete task
    const handleDelete = (index) => {
        props.taskDelete(index);
    }

    return (

        <View style={styles.taskItem}>
            
            <View style={styles.leftAligned}>
                <TouchableOpacity style={styles.squareDone} onPress={() => {}}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <TouchableOpacity style={styles.squareDelete} onPress={() => handleDelete(props.index)}></TouchableOpacity>

        </View>

    )

}


const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 15
    },

    leftAligned: {
        flexDirection: 'row',
        gap: 10
    },

    squareDone: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#4B0082"
    },

    itemText: {
        fontFamily: 'Manrope-Regular',
    },

    squareDelete: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#4B0082"
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