import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Button, ToolbarAndroid,
} from 'react-native'

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            username: "",

        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#ff9900" />
                <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
                    <TouchableWithoutFeedback style={styles.container}
                        onPress={Keyboard.dismiss}>
                        
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={{ uri: 'https://cf.shopee.vn/file/1bcced1693aae9e383021ce685ae63be' }}>
                                </Image>
                                <Text style={styles.title}></Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    value={this.state.username}
                                    onChangeText={username => this.setState({ username })}
                                    placeholder="Search"
                                    placeholderTextColor='#455a64'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                

                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('DangKi')} >
                                    <Text style={styles.buttonText}>Dang ki </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()} >
                                    <Text style={styles.buttonText}>Dang nhap </Text>
                                </TouchableOpacity>

                                
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }

    login() {

        fetch('http://192.168.56.1:8080/webservice/login.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == "true") {
                    alert("Successfully Login");
                } else {
                    alert("Login Failed");
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        // backgroundColor: 'rgb(32, 53, 70)', 
        backgroundColor: "#0066CC",
        flexDirection: 'column',

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#000000'
    },
    logo: {
        width: 128,
        height: 120,

    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
        marginBottom: 150
    },
    infoContainer: {
        marginBottom: 70,
        position: 'absolute',
        left: 100,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        marginBottom: 20,
        height: 40,
        color: '#000000',
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 20,
        fontSize: 15
    },
    buttonContainer: {
        backgroundColor: '#00CC00',
        paddingVertical: 15,
        borderRadius: 30,
        height: 50,
        marginBottom: 20

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15
    },
    hello: {
        marginTop: 450
    }
})
