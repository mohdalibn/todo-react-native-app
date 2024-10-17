
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TaskItem(props){


    // Handler to delete task
    const handleDelete = (index) => {
        props.taskDelete(index);
    }

    return (

        <View style={styles.taskItem}>
            
            <Text style={styles.itemText}>{props.text}</Text>

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
        borderRadius: 15,
        marginBottom: 10
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
    }
})


