import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fafaff',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'green',
  },
  topIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  menuIcon: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    backgroundColor: 'red',
  },
  bellIcon: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  plus: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
  },
});

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <SafeAreaView style={styles.topIcons}>
        <Text style={styles.menuIcon}>Icon</Text>
        <Text style={styles.bellIcon}>Icon</Text>
      </SafeAreaView>
      <Text style={styles.title}>Today</Text>
      <SafeAreaView style={styles.bottomContainer}>
        <Text style={styles.plus}>Plus</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
