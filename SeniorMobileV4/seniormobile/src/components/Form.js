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
    TouchableOpacity,

} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Field, reduxForm } from 'redux-form';
import InputText from "../components/InputText";
import axios from 'axios';

class Form extends Component {

    constructor(){
        super();
        this.state = {
            id:"",
            password:""
        }
        this.handleChangeid = this.handleChangeid.bind(this);
        this.handleChangepass = this.handleChangepass.bind(this);
    }

    loginPressed = () => {
        console.log("BURASI");
        const user = {
            bilkentId: this.state.id,
            password: this.state.password
        }

        axios.post("http://192.168.1.31:8082/login", { user })
            .then(res => {
                if (res.status === 200) {
                    Actions.home()
                }
            });
    }

    handleChangeid(e) {
        this.setState({ id: e });
    }

    handleChangepass(e) {
        this.setState({ password: e });
    }

    renderTextInput = (field) => {
        const { meta: { touched, error }, label, secureTextEntry, maxLength, keyboardType, placeholder, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput}

                />
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );

    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <Field
                    name="id"
                    placeholder="Id"
                    value={this.state.id}
                    onChange={this.handleChangeid}
                    component={this.renderTextInput} />
                <Field
                    secureTextEntry={true}
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChangepass}
                    component={this.renderTextInput} />
                <TouchableOpacity style={styles.button} onPress={this.loginPressed}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputBox: {
        borderWidth: 1,
        borderBottomColor: '#09203f',
        width: 300,
        maxHeight: '30%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#ffffff',
        paddingHorizontal: 16,
        borderRadius: 25,
        marginVertical: 10,
        fontSize: 15,
        letterSpacing: 0.1,
    },
    buttonText: {
        letterSpacing: 4,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    button: {
        minWidth: '70%',
        backgroundColor: '#041328',
        borderRadius: 25,

        marginVertical: 50,
        paddingVertical: 13,

    }

});


export default reduxForm({
    form: "form"
})(Form)