
import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { AppBar } from '../UI/header';
import { WoodenCardUI } from './Dadhboard_UI_Components/wooden_card';
import { HSizedBox, VSizedBox } from '../UI/spaces';

const DashboardScreen = ({ navigation }) => {
  // List of values for the wooden cards
  const woodenCardValues = [
    { id: 2, label: '2x2' },
    { id: 3, label: '3x3' },
    { id: 4, label: '4x4' },
    { id: 5, label: '5x5' },
    { id: 6, label: '6x6' },
    { id: 7, label: '7x7' },
    { id: 8, label: '8x8' },
    { id: 9, label: '9x9' },
  ];

  const handleCardPress = (id, label) => {
    navigation.navigate('GameScreen', { id, label });
  };

  return (
    <ImageBackground source={require('../../assets/images/Dashboard.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <AppBar
          centerIcon="home"
          title="Home"
          onLeftPress={() => console.log('Left icon pressed')}
          onRightPress={() => console.log('Right icon pressed')}
        />
        <VSizedBox height={15} />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {woodenCardValues.map((card) => (
            <TouchableRipple
              key={card.id}
              onPress={() => handleCardPress(card.id, card.label)}
              rippleColor="rgba(0, 0, 0, .32)"
              style={styles.rippleContainer}
            >
              <View style={styles.cardContainer}>
                <WoodenCardUI 
                  label={card.label} 
                  height={90} 
                  width={200} 
                  fontSize={35} 
                />
              </View>
            </TouchableRipple>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  rippleContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardContainer: {
    // You can add additional styling here if needed
  },
});

export { DashboardScreen };