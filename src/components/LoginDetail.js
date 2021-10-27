import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import { Button,InputDetail } from '.'

export default class Message extends Component {
    constructor(props) {
        super(props)       
        this.state={
            phoneNumber:'',
            submitStatus:false
        }
    }
    handleSubmit = ()=>{
        this.setState({
            submitStatus:true
        })
        console.log('button submitted');
    }

    render() {
        const { messageHeading, messageText, messagePhoneNumber } = this.props.content
        return (
            <View style={styles.container}>
                <View style={styles.phoneNumberInput}>                   
                    <InputDetail/>
                </View>
                <View style={styles.buttonConatainer}>
                    <Button handleSubmit={this.handleSubmit} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:25
    },
    phoneNumberInput: {
        width:'100%',
        marginVertical:10,
        
       
    },    
    buttonConatainer:{
        width:'100%',
        marginVertical:10
    }
})