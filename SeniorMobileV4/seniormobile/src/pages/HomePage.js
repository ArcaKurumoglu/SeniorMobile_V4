/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Button, StyleSheet, View, Text, TouchableOpacity, StatusBar, Platform, FlatList, Image, SafeAreaView, ScrollView
} from 'react-native';
import Slide from '../components/Slider';
import DropDownItem from 'react-native-drop-down-item';
import 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';
import { List, Checkbox } from 'react-native-paper';
import {Header} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view-forked';
function HomePage(props) {

    
    

    return (
     
        <ScrollView>
  <Header
        containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0,maxHeight:'5%' }}
centerComponent={{ text: 'Home', style: { color: '#fff',marginBottom:'7%', fontSize:18} }}

/>
            <View style={styles.container}>
                <View style={styles.slider}>
                    <Slide />
                </View>
<View>
 
<View style={styles.BoxAll}>

                    <Text style={styles.TextCourse}>“Sports as a Way of Life”</Text>
                  

           
                
                </View>
     <List.Section>
        <List.Accordion
        theme={{ colors: { primary: '#D3252A' }}}
          title="Sports Tournaments"
         
          left={props => <Icon name="user-friends" style={styles.icons}/>}
        >
          <List.Item title="Football Tournament"/>
          <List.Item title="Basketball Tournament" />
          <List.Item title="Volleyball Tournament" />
          <List.Accordion title="Racket Sports Tournament" theme={{ colors: { primary: '#D3252A' }}} >
          <View style={styles.accordionracket}>
              <List.Item title="Tennis Tournament" />
              <List.Item title="Ping-Pong Tournament" />
              <List.Item title="Squash Tournament" />
              <List.Item title="Badminton Tournament" />
          </View>
          
          </List.Accordion>
        </List.Accordion>

        <List.Accordion
         theme={{ colors: { primary: '#D3252A' }}}
          title="Sports Courses"
          left={props => <Icon name="book" style={styles.icons}/>}
        
        >
          <List.Item title="Group Exercise" />
          <List.Item title="Stretching" />
          <List.Item title="Zumba" />
          <List.Item title="Crunch" />
          <List.Item title="Pilates" />
          <List.Item title="Strong by Zumba" />
          <List.Item title="Yoga" />
          <List.Item title="Total Body Shape" />
          <List.Item title="Leg Workout" />
          <List.Item title="Noon Yoga" />
          <List.Item title="Tae Bo" />
     

        </List.Accordion>
        <List.Accordion
         theme={{ colors: { primary: '#D3252A' }}}
          title="Sports Facilities"
          left={props => <Icon name="dumbbell" style={styles.icons}/>} >
         <List.Accordion title="Main Campus" theme={{ colors: { primary: '#D3252A' }}} >
          <View style={styles.accordionracket}>
          <List.Accordion title="Dormitories Sports Hall" theme={{ colors: { primary: '#D3252A' }}} >
          <View style={styles.accordionracket}>
              <List.Item title="Group Exercises Studio" />
              <List.Item title="Basketball, Volleyball Courts" />
              <List.Item title="Martial Arts Studio" />
              <List.Item title="Fitness/Conditioning Room" />
              <List.Item title="Table Tennis" />
              <List.Item title="Squash Courts" />
              <List.Item title="Walking/Running Track" />
              <List.Item title="Swimming Pool (semi-olympic)" />
          </View>
          
          </List.Accordion>
          <List.Accordion title="Main Sports Hall" theme={{ colors: { primary: '#D3252A' }}} >
          <View style={styles.accordionracket}>
              <List.Item title="Group Exercises Studio" />
              <List.Item title="Badminton Courts" />
              <List.Item title="Basketball, Volleyball Courts" />
              <List.Item title="Fitness/Conditioning Room" />
              <List.Item title="Table Tennis Room" />
              <List.Item title="Multi-Purpose Program Studio" />
            
          </View>
          
          </List.Accordion>
          <List.Accordion title="Other Sports Facilities" theme={{ colors: { primary: '#D3252A' }}} >
          <View style={styles.accordionracket}>
              <List.Item title="Outdoor Tennis Courts" />
              <List.Item title="Mini Football Fields" />
              <List.Item title="Indoor Tennis Courts" />
              <List.Item title="Grass Football Field" />
              <List.Item title="Table Tennis Room" />
              <List.Item title="Multi-Purpose Program Studio" />
            
          </View>
          
          </List.Accordion>
          
            
          </View>
          
          
          </List.Accordion>
     
          <List.Accordion
        theme={{ colors: { primary: '#D3252A' }}}
          title="East Campus">
          
          <List.Accordion title="East Sports Hall" theme={{ colors: { primary: '#D3252A' }}} >
          <View style={styles.accordionracket}>
              <List.Item title="Badminton Courts" />
              <List.Item title="Basketball-Volleyball Courts" />
              <List.Item title="Fitness/Conditioning Room" />
              <List.Item title="Table Tennis Room" />
          </View>
          
          </List.Accordion>
          <List.Accordion title="Other Sports Facilities" theme={{ colors: { primary: '#D3252A' }}} >
          <View style={styles.accordionracket}>
              <List.Item title="Outdoor Basketball-Volleyball-Tennis Courts" />
              <List.Item title="Mini Football Fields" />
           
          </View>
          
          </List.Accordion>
        </List.Accordion>
        </List.Accordion>
        
      </List.Section>
</View>
               


            </View>
        </ScrollView>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',



    },
    accordionracket:{
            marginLeft:'10%',
    },
    box1: {

        alignContent: 'center',

    },
    box2: {
        marginTop: '9.5%',
        alignContent: 'center',



    },
    TextCourse: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0F559D',
        alignSelf: 'center',
        alignContent: 'center',
    },
    textBox: {

        fontSize: 17,
        fontWeight: 'bold',
        color: '#0F559D',
        alignSelf: 'center',
        left: 20,
        right: 10,

        alignItems: 'center',

    },
    textBox2: {

        fontSize: 17,
        fontWeight: 'bold',
        color: '#0F559D',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: '24%',
        alignItems: 'center',

        right: 2,


    },
    BoxAll: {
        flex: 1,
        alignContent: 'center',



    },
    tBox: {
        flexDirection: 'column',
        flexWrap: 'wrap',


        maxWidth: '100%',
        height: 200,
        backgroundColor: 'transparent',
        paddingBottom: 50,
    },
    textOne: {

    },
    mainbox: {
        justifyContent: 'center',

        borderWidth: 1,
        borderColor: '#0F559D',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderRadius: 25,
        width: '43%',
        height: 170,
        backgroundColor: 'white',
        marginLeft: '5%',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.32,
        shadowRadius: 20,

        elevation: 7,
    },
    mainbox2: {
        borderWidth: 1,
        borderColor: '#D3252A',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderRadius: 25,
        width: '43%',
        height: 170,
        backgroundColor: 'white',
        marginLeft: '5%',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.40,
        shadowRadius: 10,

        elevation: 7,
    },
    slider: {
        flexGrow: 1,
        height: 270,

    },
    Img: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        marginLeft: '26.5%',
        marginBottom: '20%'


    },
    Img2: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        marginLeft: '26.5%',
        marginBottom: '20%'


    },
    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 20,
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
        color: "#0F559D",
        fontSize: 17,
    },
    tabStyle: {},
  scrollStyle: {
    backgroundColor: 'white',
    paddingLeft: 65,
    paddingRight: 65,
    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    width: 15,
  },
  
    
}); export default HomePage;

