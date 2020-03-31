import React from 'react';
import Container from 'react-native-container';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button } from 'native-base';

class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/474x/bf/28/45/bf28450fec051c9c1d57ce7eedb8e422.jpg' }} />
        </View>
        <Button style={styles.button}>
          <Text style={styles.btnText}>Get another meme!</Text>
        </Button>
      </Container>
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
    borderRadius: 25,
    justifyContent: 'center',
    elevation: 9
  },
  btnText: {
    fontFamily: 'Muli',
    fontSize: 15,
    fontWeight: '600'
  },
  image: {
    width: 360,
    height: 360,
    resizeMode: 'contain'
  },
  imageView: {
    marginBottom: 25
  }
})

export default App;