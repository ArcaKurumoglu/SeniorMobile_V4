/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CollapsibleList from "react-native-collapsible-list";
import axios from 'axios';

export default class AnnouncementTab extends Component {
    constructor() {
        super();    
        this.state = {
            announcements:[]
        }
    }
    
    componentDidMount() {
        axios.get("http://192.168.1.20:8082/announcements")
            .then(response => this.setState({
                announcements:response.data})
            ).catch((error) => {
                console.log(error.message)
             })
    }

    render() {
        const {announcements} = this.state;
        console.log(announcements);
        return (
            <View style={styles.container}>
                { announcements ? announcements.map((x) => 
                    <CollapsibleList
                    numberOfVisibleItems={1}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonContent={
                        <View style={styles.button}>
                            <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons}/></Text>
                        </View>
                }>
                    <View style={styles.collapsibleItem}>
                        <Text style={styles.announcement}><Icon name="bullhorn" style={styles.icons} /> {x.title}
                    </Text>
                    </View>
                    <View style={styles.collapsibleItem}>
                        <Text>Start Date: {x.startdate}</Text>
                    </View>
                    <View style={styles.collapsibleItem}>
                        <Text>End Date: {x.enddate}</Text>
                    </View>
                    <View style={styles.collapsibleItem}>
                        <Text>{x.text}</Text>
                    </View>
                </CollapsibleList>
                 )  : <div></div>}
                
                
                    {/* <CollapsibleList
                        numberOfVisibleItems={1}
                        wrapperStyle={styles.wrapperCollapsibleList}
                        buttonContent={
                            <View style={styles.button}>
                                <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons}/></Text>
                            </View>
                        }
                    >
                        <View style={styles.collapsibleItem}>
                            <Text style={styles.announcement}><Icon name="bullhorn" style={styles.icons} /> Spring Run 2020, Spring
 </Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>Date: Saturday, May 16, 2020 Time: 11:00 a.m.</Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>Registration Deadline: Friday, May 15, 2020</Text><Text>Distance: 2 k. (Walk & Run) /
Free of Charge</Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>All students, academic and administrative staff and their family members are welcome to participate in this special event.
                            It is recommended that you train and get ready ahead of time. Trophies will be presented to the first three finishers in each category.
            Categories are according to age as follows: 11-15, 16-20, 21-25, 26-30, 31-35, 36-44, 45-54, 55-59, 60 and over.</Text>
                        </View>
                    </CollapsibleList> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container :{
flex:1
    },


    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 10,
        overflow: "hidden",
        backgroundColor: "#FFF",
        borderRadius: 5
    },
    collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCC",
        padding: 10,

    },

    button: {

    },

    buttonContent: {

    },
    buttonText: {
        textAlign: "center",
        fontWeight:"bold",
    },
    announcement: {

        flex: 2,
        justifyContent: "space-around",
        fontWeight: "bold",

    },
    icons: {
        color: "red",
        fontSize: 14,
    }



});