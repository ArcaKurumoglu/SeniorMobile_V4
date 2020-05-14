import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet
} from "react-native";
import { Title } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Events from '../pages/Events';
import AnnouncementTab from '../pages/AnnouncementTab';
import CollapsibleList from "react-native-collapsible-list";
const { width } = Dimensions.get("window");
import axios from 'axios';




export default class Announcements extends React.Component {
    constructor() {
        super();    
        this.state = {
            active: 0,
            xAnnouncements: 0,
            xEvents: 0,
            translateX: new Animated.Value(0),
            translateXAnnouncements: new Animated.Value(0),
            translateXEvents: new Animated.Value(width),
            translateY: -1000
        }
    }
 
    

    handleSlide = type => {
        let {
            active,
            xAnnouncements,
            xEvents,
            translateX,
            translateXAnnouncements,
            translateXEvents
        } = this.state;

        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXAnnouncements, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXEvents, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXAnnouncements, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXEvents, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {
        let {
            xAnnouncements,
            xEvents,
            translateX,
            active,
            translateXAnnouncements,
            translateXEvents,
            translateY
        } = this.state;
        const announcements = this.state.announcements;
        // console.log(announcements);
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 40,
                            marginBottom: 20,
                            height: 36,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#09203f",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#09203f",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xAnnouncements: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xAnnouncements)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#09203f"
                                }}
                            >
                                Announcements
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#09203f",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                
                            }}
                            onLayout={event =>
                                this.setState({
                                    xEvents: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xEvents)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#09203f"
                                }}
                            >
                                Events
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                               
                                transform: [
                                    {
                                        translateX: translateXAnnouncements
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <AnnouncementTab/>
                            <View style={{ marginTop: 20 }}>
                                <Image
                                 
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15
                                    }}
                                />
                            </View>
                        </Animated.View>

                        <Animated.View
                            style={{
                               
                                transform: [
                                    {
                                        translateX: translateXEvents
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            <Events/>
                            <View style={{ marginTop: 20 }}>
                                <Image
                                 
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15
                                    }}
                                />
                            </View>
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 10,
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
        fontWeight:"bold",
    },
    announcement: {

        flex: 2,
        justifyContent: "space-around",
        fontWeight: "bold",

    },
    icons: {
        color: "red",
        fontSize: 14,
    }



});