/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import { Dropdown } from 'react-native-material-dropdown';
import { Header, Button } from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CollapsibleList from "react-native-collapsible-list";
import axios from 'axios';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import store from 'react-native-simple-store';



export default class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: [],
            tableTitle: [],
            tableData: [],
            courses: [],
            course: "",
            timeSlots: [],
            instructors: [],
            selectedCourses: [],
            selectedTime: "",
            userId:"",
            status:"",
            email:""
        }
        this.select = this.select.bind(this);
        this.selectTimeSlot = this.selectTimeSlot.bind(this);
    }


    componentDidMount() {
        store.get('user').then((res) => this.setState({
            userId: res.id,
            status: res.status,
            email: res.email
        }));
        axios.get("http://192.168.1.30:8082/courses")
            .then(response => this.setState({
                courses: response.data
            }))
    }

    selectTimeSlot = (e) => {
        const Instructors = [];
        this.state.courses.map((x) => x.schedule == e ? Instructors.push({ name: x.instructor, level: x.level, place: x.place }) : "NOO");
        this.setState({
            instructors: Instructors
        })
    }

    select = (e) => {

        if (e != this.state.course) {
            this.setState({
                timeSlots: []
            })
        }

        const { courses } = this.state;
        const selectedCourses = [];
        const selectedCoursesTimeSlots = [];
        courses.map((x) => x.name == e ? selectedCoursesTimeSlots.push([x.schedule]) : "NOO");
        courses.map((x) => x.name == e ? selectedCourses.push(x) : "NOO");
        const timeslots = [];
        courses.map((x) => x.name == e ? timeslots.push({ value: x.schedule }) : "NOO");
        this.setState({
            course: e,
            tableData: selectedCoursesTimeSlots,
            timeSlots: timeslots,
            selectedCourses: selectedCourses
        })


    }

    _onPressedButton = (x) => {
        if(this.state.status != 'student'){
            alert("You cannot register that without paying course fee")
        }else{
            alert(x);
            let obj = {
                "bilkentId": this.state.userId,
                "courseId": x.id,
                "name": x.name,
                "instructor": x.instructor,
                "schedule": x.schedule,
                "level": x.level,
                "place": x.place,
                "quota": x.quota
            }
    
            axios.post("http://192.168.1.30:8082/enrollCourse", obj)
                .then(res => {
                    if (res.status == 200) {
                        alert("You have registered " + x.name);
                    }
                    else if (res.status == 403) {
                        alert("You have already registered that course")
                    }
                }).catch(err => {
                    alert(err);
                });
        }
        
    }

    render() {
        // alert(this.state.status);
        const { selectedCourses, timeSlots, instructors, course, tableData } = this.state;
        console.log(this.state.selectedCourses);

        let courses = [{
            value: 'Yoga',
        }, {
            value: 'Zumba',
        }, {
            value: 'Stretching',
        }, {
            value: 'Crunch',
        }, {
            value: 'Pilates',
        }, {
            value: 'Group Exercise',
        }, {
            value: 'Strong by Zumba',
        }, {
            value: 'Total Body Shape',
        },
        {
            value: 'Leg Workout',
        },
        {
            value: 'Noon Yoga',
        },
        {
            value: 'Tae Bo',
        },
        ];

        const state = this.state;
        return (

            <View style={styles.container}>
                <Header
                    containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0, maxHeight: '5%' }}
                    centerComponent={{ text: 'Courses', style: { color: '#fff', marginBottom: '8%', fontSize: 18 } }}
                /><ScrollView>
                    <View style={styles.dropdown}>
                        <Dropdown
                            label='Choose a Course'
                            data={courses}
                            onChangeText={this.select} />
                        <Dropdown
                            label='Choose a Time Slot'
                            data={timeSlots == [] ? [{ value: "Choose a Course" }] : timeSlots}
                            onChangeText={this.selectTimeSlot} />
                    </View>
                    <View style={styles.container2}>
                        {selectedCourses.map((x) =>
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
                                    <Text style={styles.announcement}><Icon name="chevron-circle-right" style={styles.icons} /> {course} / {x.level}
                                    </Text>
                                </View>
                                <View style={styles.collapsibleItem}>
                                    <Text>Instructor : {x.name}</Text>
                                </View>
                                <View style={styles.collapsibleItem}>
                                    <Text>Place : {x.place}
                                    </Text>
                                </View>
                                <View style={styles.collapsibleItem}>
                                    <View>
                                        <Button title='Reserve' name="Reserve" onPress={() => this._onPressedButton(x)} buttonStyle={styles.enrollButtonStyle}></Button>
                                    </View>
                                    <Table borderStyle={{ borderWidth: 0 }}>
                                        <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                                        <TableWrapper style={styles.wrapper}>
                                            <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                            <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
                                        </TableWrapper>
                                    </Table>
                                </View>
                            </CollapsibleList>


                        )}
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    container2: {

        width: '90%',
        marginLeft: '5%',



    },

    enrollButtonStyle: {
        width: '18%',
        backgroundColor: "#09203f",


    },
    dropdown: {
        width: '90%',
        marginTop: '6%',
        marginLeft: '5%',

    },

    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 10,
        overflow: "hidden",
        backgroundColor: "#FFF",
        borderRadius: 10,


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
        fontSize: 15,

    }



});