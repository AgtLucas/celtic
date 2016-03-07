'use strict'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native'

import SearchPage from './SearchPage'

class celtic extends Component {
  render () {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage
        }} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 30,
    margin: 80
  }
})

AppRegistry.registerComponent('celtic', () => celtic)
