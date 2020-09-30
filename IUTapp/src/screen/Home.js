import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HomeScreen =()=>{
	return (
		<Text style={ styles.textStyle }> Hello there!</Text>
		);
}

const styles = StyleSheet.create(
	{
		textStyle:{
			fontSize: 30,
			color: 'blue',
		},
	}
);

export default HomeScreen;