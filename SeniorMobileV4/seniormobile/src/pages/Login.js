/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {

    registers(){
        Actions.register()
    }

    home(){
        Actions.home()
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Login" onPress={this.home}/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.accountText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.registers}><Text style={styles.registerButton}>Register Now</Text></TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09203f',

    },
    inputBox: {

        width: 200,
        height: 35,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingTop: 100,
        borderRadius: 10,
        position: 'absolute'
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 10,

    },
    registerButton: {
        color: 'rgba(255,255,255,1)',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',

    },
    accountText: {
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        fontSize: 15,
        fontWeight:'bold',
    }

});

