
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Home';
import ProfileScreen from './src/screen/Profile';
import ListScreen from './src/screen/FacultyList';
import SemesterScreen from './src/screen/SemesterList';
import SemesterDetailsScreen from './src/screen/SemesterDetails';

const stack = createStackNavigator();

const headeroption={
            headerTitleAlign:'center',
            };

function App(){
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={headeroption}
        />
        <stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={headeroption}
        />
        <stack.Screen
          name="Semester"
          component={SemesterScreen}
          options={headeroption}
        />
        <stack.Screen
          name="Courses"
          component={SemesterDetailsScreen}
          options={headeroption}
        />
        <stack.Screen
          name="Faculty"
          component={ListScreen}
          options={headeroption}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}



export default App;