import React from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';

const HomeScreen =()=>{
	return (
		<View style={styles.container}>
			<Image style={styles.imageStyle}
			source={require('./../../assets/iut_logo.png')}>
			</Image>
		</View>
		);
}

const styles = StyleSheet.create(
	{
		container: {
	    display: "flex",
	    justifyContent: "space-around",
	    alignItems: "center",
	    height: "50%",
	    textAlign: "center"
	  },
		textStyle:{
			fontSize: 30,
			color: 'blue',
		},

		imageStyle:{

			height:165,
			width: 100
		}
	}
);

export default HomeScreen;