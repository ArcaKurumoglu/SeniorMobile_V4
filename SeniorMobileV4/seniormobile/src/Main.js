/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    ImageBackground,
    TouchableOpacity,

} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import Routes from './components/Routes';


 class Main extends Component {


    render() {
        return (
           
                <View style={styles.container}>
                    <StatusBar backgroundColor="#09203f"
                        barStyle="light-content" />
                    <Routes />
                </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      

    },


});

export default connect(null,null)(Main)