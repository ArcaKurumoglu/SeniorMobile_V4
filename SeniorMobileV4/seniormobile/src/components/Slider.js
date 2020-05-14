/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";




export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../images/spor1-min.jpg'),
                require('../images/spor2-min.jpg'),
                require('../images/spor3-min.jpg'),
                require('../images/spor4-min.jpg'),
                require('../images/spor6-min.jpg'),
                require('../images/spor8-min.jpg'),
                require('../images/spor9-min.jpg'),
                require('../images/spor10-min.jpg'),
                require('../images/spor11-min.jpg'),

            ]
        };
    }
    render() {

        return (
            <View style={styles.container}>
                <View>
                    <SliderBox
                    
                        images={this.state.images}
                        sliderBoxHeight={270}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: 0,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 10
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                        ImageComponentStyle={{ width: '100%', }}
                        imageLoadingColor="#2196F3"
                    />
                    
                </View>

            </View>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    tBox: {

        marginTop: '1%',

        width: '100%',
        minHeight:'10%',
        backgroundColor: 'transparent',

    },
    textOne: {

    }

});