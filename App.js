import React from 'react';
import Container from 'react-native-container';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'native-base';

class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
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
    fontWeight: 'bold',
    fontFamily: 'Muli'
  }
})

export default App;