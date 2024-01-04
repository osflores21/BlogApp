import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManagePost from '../screens/ManagePost';
import Home from '../screens/Home';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarIconStyle: { alignSelf:'center',display: "none", color: "#F0000" } }}>
      <Tab.Screen name='Home' component={Home} options={{ title: "POST" }}></Tab.Screen>
      <Tab.Screen name='ManagePost' component={ManagePost} options={{ title: "MANAGE" }}></Tab.Screen>
    </Tab.Navigator>

  )
}

export default TabNavigation

const styles = StyleSheet.create({

})