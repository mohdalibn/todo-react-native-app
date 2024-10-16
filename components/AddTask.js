
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AddTask(){

    return (

        <View style={styles.addTask}>
            <View style={styles.addTaskStyle}>
                <Text style={styles.addTaskText}>Add your task here...</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => {}}>
            <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
    addTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 20,
        backgroundColor: '#000',
        borderRadius: 15
      },
    
    addTaskStyle: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 240
    },

    addTaskText: {
        color: '#fff'
    },

    addButton: {
        paddingVertical: 10
    },  

    addButtonText: {
        color: '#fff',
        fontWeight:'bold'
    }

})