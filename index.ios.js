import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Moment from 'moment'
import DayItem from './src/DayItem'


export default class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  }

  days() {
    let daysItems = []

    for(var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd')
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems
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
