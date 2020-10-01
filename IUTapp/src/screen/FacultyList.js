import React from 'react';
import {  View, FlatList, StyleSheet, Text } from 'react-native';

const FacultyMemeber=[
    { id:'1', name: 'Rodney Day'},
    { id:'2',name: 'Alfonso Owen'},
    { id:'3', name:'Loren Simmons'},
    { id:'4',name:'Irma Chavez'},
    { id:'5',name: 'Erika Hall'},
    { id:'6',name: 'Lola Vasquez'},
    { id:'7',name: 'Paulette Patrick'},
    { id:'8',name: 'Willard Mcdaniel'},
    { id:'9',name: 'Dwayne Mack'},
    { id:'10',name: 'Lowell Arnold'}
]

const ListScreen=()=>{
    return(
        <View style={styles.container}>
            <FlatList
                data= {FacultyMemeber}
                renderItem={function ({item})
                    {
                        return <Text style={styles.textStyle}>{item.id}. {item.name}</Text>;
                    }
                }
            />
                
            
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            textAlign: "center"
        },
        textStyle: {
            width:350,
            backgroundColor:'#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            fontSize: 15,
            color: 'black',
        },
    }
);

export default ListScreen;