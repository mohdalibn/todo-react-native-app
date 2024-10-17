import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, Text, View, ScrollView, LayoutAnimation, UIManager, Platform } from 'react-native';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';
import * as Font from 'expo-font';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// Adding a subtle animation for when the user adds and deletes a task
const animateAddAndDelete = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    springDamping: 0.7,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

export default function App() {

  const [currentTime, setCurrentTime] = useState('');
  const [fontLoaded, setFontsLoaded] = useState(false);
  const [todoList, setTodoList] = useState([]);

  // Handler to add task
  const handleTaskAdd = (task) => {
    Keyboard.dismiss();
    LayoutAnimation.configureNext(animateAddAndDelete);
    setTodoList([...todoList, task]);
  }

  // Handler to delete task
  const handleTaskDelete = (index) => {
    LayoutAnimation.configureNext(animateAddAndDelete);
    let listCopy = [...todoList];
    listCopy.splice(index, 1); 
    setTodoList(listCopy);
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

      
        <View style={styles.tasksContainer} >

          <AddTask taskAddFunc={handleTaskAdd} />

          <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
            
            {
              todoList.map((task, index) => {
                return <TaskItem key={index} index={index} text={task} taskDelete={handleTaskDelete}/>
              } )
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
