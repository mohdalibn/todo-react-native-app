import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';

export default function App() {

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {

      const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(); 
      setCurrentTime(timeString);
      
    }, 1000);

    return () => clearInterval(timer);

  }, []);


  return (
    <View style={styles.container}>

      <View style={styles.mainContainer}>

      <Text style={styles.time}>{currentTime}</Text>

        <Text style={styles.nameTitle}>Hi, Mohd Ali</Text>

        <Text style={styles.mainTitle}>Today's Tasks</Text>

      
        <View style={styles.tasksContainer}>

          <AddTask/>

          

          <TaskItem text={'This is the first task'} />
          <TaskItem text={'This is the second task'} />
          <TaskItem text={'This is the third task'} />
          <TaskItem text={'This is the fourth task'} />

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
    paddingTop: 60
  },

  nameTitle: {
    marginTop: 10,
    fontSize: 45,
    fontWeight: 'bold',
  },

  time: {
    fontSize: 25,
    fontWeight: 'light'
  },

  mainContainer:{
    paddingTop: 10,
    paddingHorizontal: 10
  },

  mainTitle: {
    fontSize: 27,
    // fontWeight: 'bold',
    marginTop: 10,
    color: "#4B0082"
  },

  tasksContainer: {
    gap: 10,
    marginTop: 15
  },

});
