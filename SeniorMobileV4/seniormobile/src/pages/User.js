/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';
import {Header} from 'react-native-elements';



export default class User extends Component {

   
    render() {
       
        return (
            <View style={styles.container}>
            <Header
        containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0,maxHeight:'5%' }}
centerComponent={{ text: 'User', style: { color: '#fff',marginBottom:'8%', fontSize:18} }}

/>
             <Text>
      
             </Text>
             <View style={styles.coursestaken}>
             <Text> Courses Taken</Text>
            </View>
            <View style={styles.Appointments}>
             <Text> Appointments</Text>
            </View>
            <View style={styles.Statistics}>
             <Text> Statistics</Text>
            </View>
            <View style={styles.Logout}>
             <Text> Logout</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
          
    },
    

   
});