/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import { Dropdown } from 'react-native-material-dropdown';
import { Header,Button } from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CollapsibleList from "react-native-collapsible-list";
import axios from 'axios';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tableHead: [],
          tableTitle: [],
          tableData: [
           
          ],
          courses:[]
        }
      }
      componentDidMount() {
        axios.get("http://192.168.1.20:8082/courses")
            .then(response => this.setState({
                courses: response.data,
                tableData:[response.data.map((x)=>[x.schedule])]
            }))

    }
      
    render() {
        console.log(this.state.courses)
        console.log(this.state.tableData)
        let day = [{
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
                        data={day} />
                </View>
                <View style={styles.container2}>
                <CollapsibleList
                        numberOfVisibleItems={1}
                        wrapperStyle={styles.wrapperCollapsibleList}
                        buttonContent={
                            <View style={styles.button}>
                                <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons}/></Text>
                            </View>
                        }
                    >
                        <View style={styles.collapsibleItem}>
                            <Text style={styles.announcement}><Icon name="chevron-circle-right" style={styles.icons} /> Course Name / Level
 </Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>Instructor : </Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>Place :
</Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                       
                            
                               {/* <Text>Schedule </Text><Button title='Enroll' name="Enroll" buttonStyle={styles.enrollButtonStyle}></Button> */}
                               <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
                        </View>
                    </CollapsibleList></View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
   container2:{
      
       width:'90%',
       marginLeft: '5%',
     
 
   
   },
   
   enrollButtonStyle:{
        width:'18%',
        backgroundColor:"#09203f",
       

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
        borderBottomWidth:StyleSheet.hairlineWidth,
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