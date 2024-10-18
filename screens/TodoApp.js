
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, Text, View, ScrollView, LayoutAnimation, UIManager, Platform } from 'react-native';
import TaskItem from '../components/TaskItem';
import AddTask from '../components/AddTask';
import * as Font from 'expo-font';


export default function TodoApp({ route }){

    const { nameOfUser } = route.params;

    const [currentTime, setCurrentTime] = useState('');
    const [fontLoaded, setFontsLoaded] = useState(false);
    const [todoList, setTodoList] = useState([]);
  
    // Handler to add task
    const handleTaskAdd = (taskText) => {
      Keyboard.dismiss();
      const newTask = {
        id: Date.now().toString(),
        text: taskText,
      };
      setTodoList([...todoList, newTask]);
    }
  
    // Handler to delete task
    const handleTaskDelete = (taskID) => {
      setTodoList(prevTodoList => prevTodoList.filter(task => task.id !== taskID));
    }
  
    useEffect(() => {
  
        const loadFonts = async () => {
          await Font.loadAsync({
            'Manrope-Variable': require('../assets/fonts/Manrope-Variable.ttf'),
            'Manrope-Regular': require('../assets/fonts/Manrope-Regular.ttf'),
          });
          setFontsLoaded(true);
        };
  
        loadFonts();
  
        const timer = setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString(); 
        setCurrentTime(timeString);
        
      }, 1000);
  
      return () => clearInterval(timer);
  
    }, []);
  
    if (!fontLoaded) {
      return null;
    }

    return (

        <View style={styles.container}>

            <View style={styles.mainContainer}>

                <Text style={styles.time}>{currentTime}</Text>

                <Text style={styles.nameTitle}>Hi, {nameOfUser}</Text>

                <Text style={styles.mainTitle}>Today's Tasks</Text>


                <View style={styles.tasksContainer} >

                    <AddTask taskAddFunc={handleTaskAdd} />

                    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                    
                    {
                        todoList.map((task) => {
                        return <TaskItem key={task.id} id={task.id} text={task.text} taskDelete={handleTaskDelete}/>
                        })
                    }

                    </ScrollView>

                </View>

            </View>

        </View>

    );

}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      padding: 10,
      paddingTop: 60,
    },
  
    nameTitle: {
      marginTop: 10,
      fontFamily: 'Manrope-Variable',
      fontSize: 45,
      fontWeight: 'bold',
    },
  
    time: {
      fontFamily: 'Manrope-Variable',
      fontSize: 25,
      fontWeight: 'light'
    },
  
    mainContainer:{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 10
    },
  
    mainTitle: {
      fontFamily: 'Manrope-Regular',
      fontSize: 27,
      marginTop: 10,
      color: "#4B0082"
    },
  
    tasksContainer: {
      flex: 1,
      gap: 10,
      marginTop: 15
    },
  
    scrollContainer: {
      flex: 1,
    },
  
    scrollViewContent: {
      marginBottom: 10
    }
  
});
  