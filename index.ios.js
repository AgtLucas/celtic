'use strict'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS
} from 'react-native'

class HelloWorld extends Component {
  render () {
    return (
      <Text style={styles.text}>Yooo!</Text>
    )
  }
}

class celtic extends Component {
  render () {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld
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
