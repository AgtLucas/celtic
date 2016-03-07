'use strict'

import React, {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} from 'react-native'

const urlForQueryAndPage = (key, value, pageNumber) => {
  let data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber
  }
  data[key] = value
  let queryString = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&')

  return 'http://api.nestoria.co.uk/api?' + queryString
}

class SearchPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: ''
    }
  }

  onSearchTextChanged (event) {
    console.log('onSearchTextChanged')
    this.setState({ searchString: event.nativeEvent.text })
    console.log(this.state.searchString)
  }

  onSearchPressed () {
    let query = urlForQueryAndPage('place_name', this.state.searchString, 1)
    this._executeQuery(query)
  }

  _executeQuery (query) {
    console.log(query)
    this.setState({ isLoading: true })
  }

  render () {
    console.log('SearchPage.render')
    let spinner = this.state.isLoading ? (<ActivityIndicatorIOS hidden='true' size='large' />) : (<View />)
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Search for houses to buy!</Text>
        <Text style={styles.description}>Search by place-name, postcode or search near your location.</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or postcode' />
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go!</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('image!house')} style={styles.image} />
        {spinner}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    color: '#48BBEC',
    borderRadius: 8
  },
  image: {
    width: 217,
    height: 138
  }
})

export default SearchPage
