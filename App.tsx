import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/screens/Home';
import CreatePost from './src/screens/CreatePost';
import EditPost from './src/screens/EditPost';
import DetailPost from './src/screens/DetailPost';
import ManagePost from './src/screens/ManagePost';
import TabNavigation from './src/navigator/TabNavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='CreatePost' component={CreatePost} options={{ title:'Create post' }}></Stack.Screen>
        <Stack.Screen name='EditPost' component={EditPost} options={{ title:'Edit published post' }}></Stack.Screen>
        <Stack.Screen name='DetailPost' component={DetailPost} options={{ title:'Detail post' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}
export default App

const styles = StyleSheet.create({})