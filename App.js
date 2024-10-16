import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.mainContainer}>

        <Text style={styles.nameTitle}>Hi, Mohd Ali</Text>

        <Text style={styles.mainTitle}>Today's Tasks</Text>

        <View style={styles.tasksContainer}>

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
    paddingTop: 80
  },

  nameTitle: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: 'bold',
  },

  mainContainer:{
    paddingTop: 10,
    paddingHorizontal: 10
  },

  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },

  tasksContainer: {
    gap: 10,
    marginTop: 15
  },

});
