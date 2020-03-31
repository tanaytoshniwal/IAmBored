import React from 'react';
import Container from 'react-native-container';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import axios from 'axios'
import ProgressiveImage from './components/ProgressiveImage/ProgressiveImage';

const link = 'https://meme-api.herokuapp.com/gimme'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      data: {
        postLink: "sample data",
        subreddit: "sample data",
        title: "sample data",
        url: 'https://i.pinimg.com/474x/bf/28/45/bf28450fec051c9c1d57ce7eedb8e422.jpg'
      }
    }
  }

  load = () => {
    this.setState({ loading: true })
    axios.get(link).then(res => {
      this.setState({
        data: res.data,
        loading: false
      })
      console.log(Object.keys(res.data))
    })
  }

  render() {
    return (
      <>
        <Container style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={{ uri: 'https://tanaytoshniwal.com/logo.png' }} />
          </View>
          <View style={styles.imageView}>
            <ProgressiveImage source={{ uri: this.state.data.url }} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this.load()}>
            <Text style={styles.btnText}>Get another meme!</Text>
          </TouchableOpacity>
        </Container>
        <AnimatedLoader
          visible={this.state.loading}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("./loader.json")}
          animationStyle={styles.lottie}
          speed={1} />
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#181818',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#E74292",
    width: '50%',
    height: 39,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9
  },
  btnText: {
    fontFamily: 'Muli',
    fontSize: 15,
    fontWeight: '600'
  },
  imageView: {
    marginBottom: 25
  },
  logo: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 75,
    height: 75,
    top: 0,
    marginTop: 25,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 50,
    height: 50
  }
})

export default App;