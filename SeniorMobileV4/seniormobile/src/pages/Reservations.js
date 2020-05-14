/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,AppRegistry, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';
import {Header} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';


export default class Reservations extends Component {

    render() {

        let reservationtype = [{
            value: 'Tournaments',
        }, {
            value: 'Court Reservations',
        }, {
            value: 'Appointments',
        }, {
            value: 'Pool',
        }, 
        ];
        let time = [{
            value: '10.40 - 11.30',
        }, {
            value: '11.40 - 12-30',
        }, {
            value: '13.40 - 14.30',
        }, 
        ];
        let course = [{
            value: 'Football',
        }, {
            value: 'Basketball',
        }, {
            value: 'Volleyball',
        }];
        return (
            <View style={styles.container}>
         
             <Header
        containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0,maxHeight:'5%' }}
centerComponent={{ text: 'Reservations', style: { color: '#fff',marginBottom:'7%', fontSize:18} }}

/>
<View style={styles.dropdown}>
                <Dropdown
                        label='Reservation Type'
                        data={reservationtype}
                    />
                    
                    <Dropdown
                        label='Choose a Course'
                        data={course}
                    />
                    <Dropdown
                        label='Choose Time slot'
                        data={time}
                    />
                    

                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    dropdown: {
        width: '90%',
        marginTop: '10%',
        marginLeft: '5%',

    },
    

   
});