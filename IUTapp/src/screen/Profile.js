import React from 'react';
import {Text, View, Image,StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen=()=>{
    return(
        <View style={styles.container}>
           <Image source={require('./../../assets/170042001.jpg')} style={styles.imageStyle}></Image>
            <Text style={styles.textStyle}>Name: Maliha Noushin Raida</Text>
            <Text style={styles.textStyle}>Student Id: 170042001</Text>
            <Text style={styles.textStyle}>Email: malihanoushin@iut-dhaka.edu</Text>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        container: {
            paddingTop:25,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center"
        },
        imageStyle:{
            height:200,
            width:150
        },
        textStyle:{
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 10,
            fontSize: 15,
            color: 'black',
        }
    }
);

export default ProfileScreen;