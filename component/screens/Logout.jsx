import React , {useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('@storage_Key');
            return true;
        }
        catch(exception) {
            console.log(exception)
        }
    }
  useEffect(  () => {
 logout()
  }, [])
    return (
  <View style={[styles.container, styles.horizontal]}>

    <ActivityIndicator size="large" color="#00ff00" />

   

  </View>
);
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;