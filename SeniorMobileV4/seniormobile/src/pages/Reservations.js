/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import { Header,  Button  } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'axios';
import CollapsibleList from "react-native-collapsible-list";
import Icon from 'react-native-vector-icons/FontAwesome5';

const initialState = {
    selectedLanes:[],
    appointments:[],
    tableHead: [],
    tableTitle: [],
    tableData: [],
    resData: [],
    campus: "",
    courtReservation: "",
    appointments: [],
    instructors: [],
    reservationType: "",
    courts: [],
    second: [],
    pool: [],
    text2: "",
    text3: "",
    third: [],
    list: [],
    sport: "",
    fourth:[],
    racketSports:[],
    contentData:[],
    fourthFieldData:[]
};

const reservationtype = [{
    value: 'Tournaments',
}, {
    value: 'Sport Courts',
}, {
    value: 'Appointments',
}, {
    value: 'Pool',
}];

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

const lanes = [
    { value: "Lane 1"}, 
    { value: "Lane 2"}, 
    { value: "Lane 3"}, 
    { value: "Lane 4"}, 
    { value: "Lane 5"}, 
    { value: "Lane 6"}
]

const racketSports = [
    { value: "Badminton" },
    { value: "Table Tennis" },
    { value: "Squash" },
    { value: "Tennis" }
]

export default class Reservations extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
        

        // this.select = this.select.bind(this);
        // this.selectTimeSlot = this.selectTimeSlot.bind(this);
        this.selectResType = this.selectResType.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
        this.selectFourth = this.selectFourth.bind(this);
        this.reset = this.reset.bind(this);

    }
    reset() {
        this.setState(initialState);
    }

    componentDidMount() {
        axios.get("http://192.168.1.30:8082/courses")
            .then(response => this.setState({
                courses: response.data
            }))

    }

    selectResType = (e) => {
        let restype = e.toLowerCase().replace(" ", "").toString();
        let sec = [];
        let third = [];
        let textSecond = "";
        let textThird = "";
        let slots = [];
        this.reset();
        console.log(this.state);
        axios.get("http://192.168.1.30:8082/" + restype)
            .then(response => {
                if (restype == "pool") {
                    response.data.map((x) => {
                        let obj = { value: '' }
                        obj.value = x.time
                        slots.push(obj)
                    })
                    sec = lanes;
                    textSecond = "Choose a Lane";
                    textThird = "Choose a Time Slot ";
                    third = slots
                }
                else if (restype == "tournaments") {
                    sec = campus;
                    textSecond = "Choose a Campus";
                    textThird = "Choose a Sport";
                    third = tournaments
                }
                else if (restype == "sportcourts") {
                    sec = campus;
                    textSecond = "Choose a Campus";
                    textThird = "Choose a Sport";
                }else if (restype == "appointments"){
                    response.data.map((x) => {
                        let obj = { value: '' }
                        obj.value = x.time
                        slots.push(obj)
                    })
                    sec = campus;
                    textSecond = "Choose a Campus";
                    textThird = "Choose a Time Slot ";
                    third = slots;
                }

                this.setState({
                    reservationType: restype,
                    resData: response.data,
                    second: sec,
                    third: third,
                    text2: textSecond,
                    text3: textThird
                })
            });



    }

    selectSecond = (e) => {
        // if(e.toLowerCase() != this.state.campus && this.state.campus != "" ){
        //     this.setState({
        //         third:[]
        //     })
        // }
        let campSelected = e.toLowerCase();
        let { reservationType } = this.state;
        // console.log(reservationType);
        if (reservationType == "tournaments") {
            this.setState({
                campus: campSelected
            })
        }
        else if (reservationType == "sportcourts") {
            let court = [];
            this.state.resData.map((x) => {
                let str = '';
                str = x;
                let obj = { value: '' }
                obj.value = str;
                court.push(obj);
            })
            this.setState({
                campus: campSelected,
                third: court,
                fourth:"Choose a racket sport"
            })
        }else if(reservationType == "appointments"){
            this.setState({
                campus: campSelected
            })
        }

    }

    selectThird = (e) => {
        const { reservationType, campus, resData, appointments } = this.state;
        let arr = [];
        console.log(e);
        let sport = e.toLowerCase().replace(" ", "").toString();
        if (reservationType == "tournaments") {
            resData.map((x) => {
                let obj = {}
                if (x.campus.toLowerCase() == campus && x.name.toLowerCase() == sport) {
                    obj = x;
                    arr.push(obj);
                }
            })
            console.log(arr);
            this.setState({
                sport: sport,
                fourth: racketSports,
                contentData: arr
            })
        } else if (reservationType == "sportcourts") {
            let courtSport = e.toLowerCase()
            axios.get("http://192.168.1.30:8082/" + courtSport)
                .then(response => {
                    this.setState({
                        courts: response.data
                    })
                })
        }else if(reservationType == "appointments"){
            let slot = e.toLowerCase();
            let arr = []
            resData.map((x)=>{
                if(x.time == slot){
                    arr.push(x);
                }
            })
            this.setState({
                appointments:arr
            })
        }else if(reservationType == "pool"){
            let slot = e.toLowerCase();
            let arr = []
            resData.map((x)=>{
                if(x.time == slot){
                    arr.push(x);
                }
            })
            this.setState({
                selectedLanes:arr
            })
        }

        this.setState({
            list: arr
        })
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    selectFourth = (e) =>{
        const {resData, campus} = this.state;
        let sport = e.toLowerCase().replace(" ", "").toString();
        let arr = [];
        resData.map((x)=> {
            if(x.name.toLowerCase() == sport && x.campus.toLowerCase() == campus)
                arr.push(x)
        })
        console.log(resData);
        axios.get("http://192.168.1.30:8082/" + sport)
                .then(response => {
                    if(response.status == 200){
                        this.setState({
                            fourthFieldData: response.data
                        })
                    }else if(response.data == 500){
                        this.setState({
                            fourthFieldData: []
                        })
                    }
                })
    }
    render() {
        const { second, third, fourth, text2, text3, text4, resData, list, reservationType, sport, contentData, campus, appointments, selectedLanes} = this.state;
        console.log(this.state);
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0, maxHeight: '5%' }}
                    centerComponent={{ text: 'Reservations', style: { color: '#fff', marginBottom: '7%', fontSize: 18 } }}

                /><ScrollView>
                    <View style={styles.dropdown}>
                        <Dropdown
                            label={'Reservation Type'}
                            data={reservationtype}
                            onChangeText={this.selectResType}
                        />
                        <Dropdown
                            label={text2}
                            data={second}
                            onChangeText={this.selectSecond}
                        />
                        <Dropdown
                            label={text3}
                            data={third}
                            onChangeText={this.selectThird}
                        />
                        {
                            sport == "racketsports" ?
                                <Dropdown
                                    label={text4}
                                    data={fourth}
                                    onChangeText={this.selectFourth}
                                /> : <View></View>
                        }

                    </View>
                    <View style={styles.container3}>

                        <View style={styles.container5}>
                        <ScrollView>
                            {
                                reservationType == "tournaments" && sport != "racketsports" ? this.state.contentData.map((x) => {
                                    if(x.name.toLowerCase() == sport && x.campus.toLowerCase() == campus){
                                        return (<CollapsibleList
                                            numberOfVisibleItems={1}
                                            wrapperStyle={styles.wrapperCollapsibleList}
                                            buttonContent={
                                                <View style={styles.button}>
                                                    <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                                                </View>
                                            }
                                        >
                                            <View style={styles.collapsibleItem}>
                                                <Text style={styles.announcement}><Icon name="chevron-circle-right" style={styles.icons} />{x.name}</Text>
                                            </View>
                                            <View style={styles.collapsibleItem}>
                                                <Text>Instructor : BASKETBALL</Text>
                                            </View>
                                            <View style={styles.collapsibleItem}>
                                                <Text>Place : MAIN</Text>
                                            </View>


                                        </CollapsibleList>
)                                    }                  
                                }): this.state.fourthFieldData.map((x) => {
                                            return (<CollapsibleList
                                                numberOfVisibleItems={1}
                                                wrapperStyle={styles.wrapperCollapsibleList}
                                                buttonContent={
                                                    <View style={styles.button}>
                                                        <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                                                    </View>
                                                }
                                            >
                                                <View style={styles.collapsibleItem}>
                                                    <Text style={styles.announcement}><Icon name="chevron-circle-right" style={styles.icons} />{x.courtNo}</Text>
                                                </View>
                                                <View style={styles.collapsibleItem}>
                                                    <Text>Court No: {x.courtNo}</Text>
                                                </View>
                                                <View style={styles.collapsibleItem}>
                                                    <Text>Time : {x.time}</Text>
                                                </View>
    
    
                                            </CollapsibleList>)
                                       }
                                    
                                    )
                                    }
                                    {reservationType == "appointments" ? appointments.map((x)=> {
                                            return (<CollapsibleList
                                                numberOfVisibleItems={1}
                                                wrapperStyle={styles.wrapperCollapsibleList}
                                                buttonContent={
                                                    <View style={styles.button}>
                                                        <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                                                    </View>
                                                }
                                            >
                                                <View style={styles.collapsibleItem}>
                                                    <Text style={styles.announcement}><Icon name="chevron-circle-right" style={styles.icons} />{x.name}</Text>
                                                </View>
                                                <View style={styles.collapsibleItem}>
                                                    <Text>Campus: {x.place}</Text>
                                                </View>
                                                <View style={styles.collapsibleItem}>
                                                    <Text>Time : {x.time}</Text>
                                                </View>
    
    
                                            </CollapsibleList>)
                                       }) : <View></View>

                                    }
                                    {reservationType == "pool" ? selectedLanes.map((x)=> {
                                            return (<CollapsibleList
                                                numberOfVisibleItems={1}
                                                wrapperStyle={styles.wrapperCollapsibleList}
                                                buttonContent={
                                                    <View style={styles.button}>
                                                        <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                                                    </View>
                                                }
                                            >
                                                <View style={styles.collapsibleItem}>
                                                    <Text style={styles.announcement}><Icon name="chevron-circle-right" style={styles.icons} />{x.lane}</Text>
                                                </View>
                                                <View style={styles.collapsibleItem}>
                                                    <Text>Quota: {x.quota}</Text>
                                                </View>
                                                <View style={styles.collapsibleItem}>
                                                    <Text>Time : {x.time}</Text>
                                                </View>
                                                <Button title='Enroll' name="Reserve" buttonStyle={styles.enrollButtonStyle}></Button>
    
    
                                            </CollapsibleList>)
                                       }) : <View></View>

                                    }
                                    </ScrollView>

                            
                        </View>

                    </View>
                </ScrollView>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

    }, container3: {
        flex: 2,
        width: '90%',
        marginLeft: '5%',

    }, container5: {
        width: '100%',
        flex: 5,
    },
    dropdown: {
        width: '90%',
        marginTop: '10%',
        marginLeft: '5%',

    }, wrapperCollapsibleList: {
        flex: 1,
        marginTop: "3%",
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