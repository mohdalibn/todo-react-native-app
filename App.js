import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';
import * as Font from 'expo-font';

export default function App() {

  const [currentTime, setCurrentTime] = useState('');
  const [fontLoaded, setFontsLoaded] = useState(false);

  const [todoList, setTodoList] = useState([]);

  const handleTaskAdd = (task) => {
      setTodoList([...todoList, task]);
  }

  useEffect(() => {

      const loadFonts = async () => {
        await Font.loadAsync({
          'Manrope-Variable': require('./assets/fonts/Manrope-Variable.ttf'),
          'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
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

        <Text style={styles.nameTitle}>Hi, Mohd Ali</Text>

        <Text style={styles.mainTitle}>Today's Tasks</Text>

      
        <View style={styles.tasksContainer}>

          <AddTask taskAddFunc={handleTaskAdd} />

          {
            todoList.map((task, index) => {
              return <TaskItem key={index} text={task}/>
            } )
          }

          {/* <TaskItem text={'Do the Dishes'} />
          <TaskItem text={'Finish assignment 4'} />
          <TaskItem text={'Do the laundry'} />
          <TaskItem text={'Cook dinner'} />
          <TaskItem text={'Clean your room'} />
          <TaskItem text={'Finish your reading'} /> */}

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
    gap: 10,
    marginTop: 15
  },

});
