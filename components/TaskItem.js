
import React, { useEffect, useRef, memo } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated, Easing } from 'react-native';

function TaskItem({ id, text, taskDelete }) {
    
    const scaleAnim = useRef(new Animated.Value(0)).current; 
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([

            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),

            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),

        ]).start();
    }, []);

    // Handles the deleting of a task 
    const handleDelete = () => {

        // Animating the TaskItem with a nice and subtle animation 
        Animated.parallel([

            Animated.timing(scaleAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),

            Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),

        ]).start(() => {
            taskDelete(id);
        });
    };

    return (
        <Animated.View
            style={[
                styles.taskItem,
                {
                    transform: [{ scale: scaleAnim }],
                    opacity: opacityAnim,
                },
            ]}
        >
            <Text style={styles.itemText}>{text}</Text>

            <TouchableOpacity style={styles.circleDelete} onPress={handleDelete}></TouchableOpacity>

        </Animated.View>
    );
};

const styles = StyleSheet.create({

    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        marginBottom: 10
    },

    itemText: {
        fontFamily: 'Manrope-Regular'
    },

    circleDelete: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#4B0082",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },

});

export default memo(TaskItem);

