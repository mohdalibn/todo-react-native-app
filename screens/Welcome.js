
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Font from 'expo-font';
import { useState, useEffect } from "react";
import Toast from 'react-native-toast-message';

export default function Welcome({navigation}){

    const useNav = useNavigation();
    const [fontLoaded, setFontsLoaded] = useState(false);
    const [name, setName] = useState('');


    // This handles the conditions to change and screen and pass the name of the user to the TodoApp screen
    const handleScreenChange = () => {
        Keyboard.dismiss();

        if(name && name.trim() !== ''){
            useNav.navigate("TodoApp", {
                nameOfUser: name.trim(),
            })
        }
        else{
            Toast.show(
                {
                    type: 'error',
                    text1: 'Warning',
                    text2: 'Please enter your name!',
                    visibilityTime: 2000,
                }
            )
        }
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
  
    }, []);
  
    if (!fontLoaded) {
      return null;
    }

    return (

        <View style={styles.outerContainer}>

            <View style={styles.mainContainer}>

                <View style={styles.contentContainer}>

                    <Text style={styles.appName}>TaskTide</Text>
                    <Text style={styles.appTagline}>Surfing the Waves of Your To-Dos</Text>

                    <TextInput style={styles.nameInput} placeholder='Enter Your Name' placeholderTextColor="#000" onChangeText={name => setName(name)} />

                    <TouchableOpacity style={styles.enterButton} onPress={handleScreenChange}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>

                </View>
                
                <View style={styles.credContainer}>
                    <Text style={styles.credText}>Made By</Text>
                    <Text style={styles.credText}>Mohd Ali Bin Naser</Text>
                </View>


            </View>


        </View>



    );
}


const styles = StyleSheet.create({

    outerContainer: {
        flex: 1,
        backgroundColor: '#E8EAED',
        padding: 10,
        paddingTop: 210,
      },

    mainContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'

    },

    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },

    credContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    appName: {
        fontFamily: 'Manrope-Regular',
        fontSize: 40,
        fontWeight: 'bold'
    },

    appTagline: {
        fontFamily: 'Manrope-Regular',
        fontSize: 18,
    },

    nameInput: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 300,
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#4B0082",
        fontFamily: 'Manrope-Regular',
        fontSize: 20,
    },

    enterButton: {
        marginTop: 20,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 12,
        backgroundColor: '#000',


    },

    buttonText: {
        fontFamily: 'Manrope-Regular',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },

    credText: {
        fontFamily: 'Manrope-Regular',
        fontSize: 17
    }

})