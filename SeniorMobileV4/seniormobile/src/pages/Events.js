/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CollapsibleList from "react-native-collapsible-list";
import axios from 'axios';

export default class Events extends Component {

    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get("http://192.168.1.20:8082/events")
            .then(response => this.setState({
                events: response.data
            })
            ).catch((error) => {
                console.log(error.message)
            })
    }

    render() {
        const { events } = this.state;
        return (
            <View style={styles.container}>

                {events ? events.map((x) =>
                    <CollapsibleList
                        numberOfVisibleItems={1}
                        wrapperStyle={styles.wrapperCollapsibleList}
                        buttonContent={
                            <View style={styles.button}>
                                <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
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
                ) : <div></div>}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
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
        fontWeight: "bold",
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