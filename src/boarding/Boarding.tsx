import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from '../CustomSwiper';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: [ FirstScreen, SecondScreen, ThirdScreen ]
    });
  }

  render() {
    return (
      <Swiper showsPagination loop={false}>
        <FirstScreen/>
        <SecondScreen/>
        <ThirdScreen/>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
