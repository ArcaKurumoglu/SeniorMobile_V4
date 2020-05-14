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
  Image,
  ImageBackground,
} from 'react-native';



export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require('../images/bil_beyaz.png')}
          style={styles.Img}
        />
        <Text style={styles.Text}>I.D. BILKENT UNIVERSITY</Text>
        <Text style={styles.bilText}>BILSPORT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '5%'
  },
  Img: {

    maxWidth: '70%',
    height: 120,
    marginVertical: 10,

  },

  Text: {
    letterSpacing: 2,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',


  },
  bilText: {
    letterSpacing: 2,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  }

});