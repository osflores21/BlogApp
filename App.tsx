import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import CreatePost from './src/screens/CreatePost';
import EditPost from './src/screens/EditPost';
import DetailPost from './src/screens/DetailPost';
import TabNavigation from './src/navigator/TabNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='CreatePost' component={CreatePost} options={{ title: 'Create post' }}></Stack.Screen>
          <Stack.Screen name='EditPost' component={EditPost} options={{ title: 'Edit published post' }}></Stack.Screen>
          <Stack.Screen name='DetailPost' component={DetailPost} options={{ title: 'Detail post' }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
export default App
