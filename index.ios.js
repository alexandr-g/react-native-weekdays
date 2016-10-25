import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Moment from 'moment'

import DayItem from './src/DayItem'

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
}

  days() {
    return DAYS.map((day) => { return <DayItem day={day} /> })
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
