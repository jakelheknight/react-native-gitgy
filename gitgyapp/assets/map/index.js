import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class googleMapInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount () {
    navigator.geolocation.requestAuthorization();
    geolocation.watchPosition(this.setPosition);
  }

  setPosition(data) {
      this.setState();
  }

  render() {
    return (
      <View>
        <Text> Location: {this.state.lat}, {this.state.lon} </Text>
      </View>
    );
  }
}
