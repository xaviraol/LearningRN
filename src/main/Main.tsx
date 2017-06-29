import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Newsfeed from './Newsfeed';

class MainScreen extends Component<{ navigation }, undefined> {
    static navigationOptions = {
        title: 'LearningRN'
    };

    render() {
        return (
             <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('Second')}>
          Go to next page!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
        );
    }
}

export default StackNavigator({
    MainScreen: { screen: MainScreen },
    Second: { screen: Newsfeed }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
