
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import TodoApp from './screens/TodoApp';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Pressable, Text } from 'react-native';

const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={
        {
          backgroundColor: '#fff',
          borderLeftColor: '#F44336',
          borderLeftWidth: 5,
          height: 70,
          borderRadius: 15,
          borderWidth: 0
        }
      }
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 20
      }}
      text2Style={{
        fontSize: 19
      }}
    />
  ),

};



const StackNavigator = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

        <StackNavigator.Navigator 
        initialRouteName='Welcome' 
        screenOptions={{
          headerShown: true,
        }}
        >
          <StackNavigator.Screen name="Welcome" component={Welcome} options={{
            title: "",
            headerStyle: {
              backgroundColor: '#E8EAED'
            },
          }} />

        <StackNavigator.Screen name="TodoApp" component={TodoApp} options={{
          title: "",
          headerStyle: {
            backgroundColor: '#E8EAED'
          },
          headerLeft: () => {
            <Pressable>
              <Text>Back</Text>
            </Pressable>
          }
        }} />
        </StackNavigator.Navigator>

        <Toast config={toastConfig} />

    </NavigationContainer>

   
  );
}
