import React from 'react';
import {Text, View, Image,StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen=()=>{
    return(
        <View style={styles.container}>
           <Image source={require('./../../assets/170042001.jpg')} style={styles.imageStyle}></Image>
            <Text>Name: Maliha Noushin Raida</Text>
            <Text>Student Id: 170042001</Text>
            <Text>Email: malihanoushin@iut-dhaka.edu</Text>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        container: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            
            textAlign: "center"
        },
        imageStyle:{
            height:200,
            width:150
        }
    }
);

export default ProfileScreen;