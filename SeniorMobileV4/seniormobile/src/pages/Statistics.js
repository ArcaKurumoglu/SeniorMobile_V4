/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';




export default class Statistics extends Component {

   
    render() {
       
        return (
            <View style={styles.container}>
             <Text>
               Statistics
             </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
          
    },
    

   
});