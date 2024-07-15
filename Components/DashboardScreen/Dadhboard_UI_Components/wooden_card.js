import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Surface } from 'react-native-paper';
import { ImageBackground, View, StyleSheet } from 'react-native';

const WoodenCardUI = ({label, width, height, fontSize}) => {
    const styles = createStyles(width, height, fontSize);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/woodenn.jpg')}
          style={styles.card}
          imageStyle={{ borderRadius: 10 }}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.1)']}
            style={styles.overlay}
          >
            <Text style={styles.text}>{label}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
};

const createStyles = (width, height,fontSize ) => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: fontSize,
    fontWeight: 'bold',
  },
});

export { WoodenCardUI };
