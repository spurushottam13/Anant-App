import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
const height = height * 0.35;
const width = width-20;

export default class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={true}
          >
            {images.map(image => (
              <Image style={styles.image} source={image.source} />
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
});
