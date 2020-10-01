
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Home';
import ProfileScreen from './src/screen/Profile';
import ListScreen from './src/screen/FacultyList';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Profile" component={ProfileScreen}/>
        <stack.Screen name="Faculty" component={ListScreen}/>
      </stack.Navigator>
    </NavigationContainer>
    );
}

export default App;