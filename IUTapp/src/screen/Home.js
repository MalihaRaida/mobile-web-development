import React from 'react';
import { Text, View, Button, Image,StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen =(props)=>{
	return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("./../../assets/iut_logo.png")}
      ></Image>
      <Text style={styles.textStyle}>Department Of CSE</Text>
      <Text style={styles.textStyle}>Programme: SWE</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={function () {
          props.navigation.navigate("Profile");
        }}
      >
        <Text style={{ fontSize: 20, color: "black" }}>My Profile</Text>
      </TouchableOpacity>

      <Button
        title="Semester Wise Course View"
        color="#00ffbf"
        onPress={function () {
          props.navigation.navigate("Semester");
        }}
      ></Button>

      <Button
        title="List of Faculty Members"
        color="#f9c2ff"
        onPress={function () {
          props.navigation.navigate("Faculty");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create(
	{
		container: {
	    display: "flex",
	    justifyContent: "space-around",
	    alignItems: "center",
	    height: "75%",
	    textAlign: "center"
	  },

	    button: {
	    	width: 300,
		    alignItems: "center",
		    backgroundColor: "#DDDDDD",
		    padding: 10
		  },
		textStyle:{
			fontSize: 15,
			color: 'black',
		},

		imageStyle:{

			height:165,
			width: 100
		}
	}
);

export default HomeScreen;