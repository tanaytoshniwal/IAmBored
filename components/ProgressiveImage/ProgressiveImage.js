import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export class ProgressiveImage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.imgBg}>
                <Image style={styles.image} {...this.props} />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imgBg: {
        backgroundColor: 'rgba(12, 12, 12, .5)',
        padding: 0,
        margin: 0,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    image: {
      width: 360,
      height: 360,
      resizeMode: 'contain',
      zIndex: 9
    },
    loadingText: {
        position: 'absolute',
        color: '#fff',
        fontFamily: 'Muli',
        zIndex: 3
    }
})

export default ProgressiveImage
