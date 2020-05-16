/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'axios';
import CollapsibleList from "react-native-collapsible-list";


const reservationtype = [{
    value: 'Tournaments',
}, {
    value: 'Sport Courts',
}, {
    value: 'Appointments',
}, {
    value: 'Pool',
},
];

const tournaments = [{
    value: "Basketball",
}, {
    value: "Football",
}, {
    value: "Tennis",
}, {
    value: "Racket Sports"
}];

const time = [{
    value: '10.40 - 11.30',
}, {
    value: '11.40 - 12-30',
}, {
    value: '13.40 - 14.30',
},
];
const courts = [{
    value: 'Football',
}, {
    value: 'Basketball',
}, {
    value: 'Volleyball',
}, {
    value: "Tennis",
}, {
    value: "Squash"
}];

const campus = [{
    value: "Main"
}, {
    value: "East"
}]

const lanes = [{
    value: "Lane 1",
}, {
    value: "Lane 2",
}, {
    value: "Lane 3",
}, {
    value: "Lane 4",
}, {
    value: "Lane 5",
}, {
    value: "Lane 6",
}]

export default class Reservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [],
            tableTitle: [],
            tableData: [

            ],
            secondPicker: [],
            courtReservation: "",
            appointments: [],
            instructors: [],
            reservationType: "",
            courts: [],
            second: [],
            pool: [],
            text2: "",
            text3: "",
            third: []
        }

        // this.select = this.select.bind(this);
        // this.selectTimeSlot = this.selectTimeSlot.bind(this);
        this.selectResType = this.selectResType.bind(this);
    }


    componentDidMount() {
        axios.get("http://192.168.1.30:8082/courses")
            .then(response => this.setState({
                courses: response.data
            }))

    }

    selectResType = (e) => {
        const type = e.toLowerCase().replace(" ", "");
        let sec = [];
        let third = [];
        let textSecond = "";
        let textThird = "";
        let slots = [];
        axios.get("http://192.168.1.30:8082/" + type)
            .then(response => {
                if(type == "pool")
                    response.data.map((x) => {
                        let obj = {value:''}
                        obj.value = x.time
                        slots.push(obj)
                    })
                    
                    this.setState({
                    secondPicker: response.data
                    })
                
            });
            console.log(slots)
        if (type == "tournaments") {
            sec = campus;
            textSecond = "Choose a Campus";
            textThird = "Choose a Sport";
        }
        else if (type == "pool") {
            sec = lanes;
            textSecond = "Choose a Lane";
            textThird = "Choose a Time Slot ";
            third = slots
        }

        this.setState({
            reservationType: type,
            second: sec,
            third: third,
            text2: textSecond,
            text3: textThird
        })
    }

    selectCampus = (e) => {
        const camp = e.toLowerCase();
        // let courtsAvailable = [];
        // if(camp == "main"){
        //     courtsAvailable = courts.map((x)=> console.log(x)
        //     );
        // }
        this.setState({
            campus: e.toLowerCase()
        })
    }

    selectCourt = (e) => {

    }
    render() {
        const { second, third, text2, text3, secondPicker } = this.state;
        // let unique = [...new Set(third)];
        // console.log("UNIQ");
        // console.log(unique);
        console.log(this.state.secondPicker);



        return (
            <View style={styles.container}>

                <Header
                    containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0, maxHeight: '5%' }}
                    centerComponent={{ text: 'Reservations', style: { color: '#fff', marginBottom: '7%', fontSize: 18 } }}

                />
                <View style={styles.dropdown}>
                    <Dropdown
                        label={'Reservation Type'}
                        data={reservationtype}
                        onChangeText={this.selectResType}
                    />
                    <Dropdown
                        label={text2}
                        data={second}
                        onChangeText={this.selectCampus}
                    />
                    <Dropdown
                        label={text3}
                        data={third}
                        onChangeText={this.selectCourt}
                    />


                </View>
                
                {/* <View style={styles.container2}>
                                                
                            <CollapsibleList
                                numberOfVisibleItems={1}
                                wrapperStyle={styles.wrapperCollapsibleList}
                                buttonContent={
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                                    </View>
                                }
                            >
                                <View style={styles.collapsibleItem}>
                                    <Text style={styles.announcement}><Icon name="chevron-circle-right" style={styles.icons} /> Lane: / {x.level}
                                    </Text>
                                </View>
                                <View style={styles.collapsibleItem}>
                                    <Text>Instructor : {x.name}</Text>
                                </View>
                                <View style={styles.collapsibleItem}>
                                    <Text>Place : {x.place}
                                    </Text>
                                </View>
                                <View style={styles.collapsibleItem}> */}


                                    {/* <Text>Schedule </Text><Button title='Enroll' name="Enroll" buttonStyle={styles.enrollButtonStyle}></Button> */}
                                    {/* <Table borderStyle={{ borderWidth: 1 }}>
                                        <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                                        <TableWrapper style={styles.wrapper}>
                                            <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                            <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
                                        </TableWrapper>
                                    </Table>
                                </View>
                            </CollapsibleList>
                            
                    </View> */}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },container2: {

        width: '90%',
        marginLeft: '5%',

    },
    dropdown: {
        width: '90%',
        marginTop: '10%',
        marginLeft: '5%',

    },



});