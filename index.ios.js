import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import DayItem from './src/DayItem'

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        <DayItem day={DAYS[0]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // moves stuff heigth wise
    alignItems: 'center' // moves stuff width wise
  }
})

AppRegistry.registerComponent('weekdays', () => Weekdays);
