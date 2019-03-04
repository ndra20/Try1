import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.box2}>
            <Text style={styles.text}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.box4}>
            <View style={styles.row}>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>1</Text>
              </View>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>2</Text>
              </View>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>3</Text>
              </View>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>4</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>5</Text>
              </View>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>6</Text>
              </View>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>7</Text>
              </View>
              <View style={[styles.box5, styles.box6]}>
                <Text style={styles.text}>8</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.box7}>
          <View style={styles.box8}>
            <Text style={styles.text1}>#JaenKuliahDiPTI</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
      flex: 1,
      },
      row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
      },
      box1: {
        backgroundColor: '#e2f442',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
       box2: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      box3: {
          backgroundColor: 'black',
          flex: 2,
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          flexDirection: 'row',
      },
      box4: {
          backgroundColor: 'white',
          flex: 3,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          width: 70,
          height: 300,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 20,
      },
      box5: {
          backgroundColor: '#2682a0',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          width: 230,
          height: 70,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 10,
          marginBottom: 50,
      },
      box6: {
        backgroundColor: '#67c681',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 70,
        height: 70,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 20
      },
      box7: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
      },
    box8: {
      backgroundColor: 'white',
      flex: 3,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 200,
      height: 140,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
    },
    text1: {
      textAlign: 'center',
      color: 'white,'
    }
  }
);
