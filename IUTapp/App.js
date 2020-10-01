
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Home';
import ProfileScreen from './src/screen/Profile';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Profile" component={ProfileScreen}/>
      </stack.Navigator>
    </NavigationContainer>
    );
}

export default App;