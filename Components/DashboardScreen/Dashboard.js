import React from 'react';
import { Surface} from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppBar } from '../UI/header';
import { ImageBackground } from 'react-native';
import { WoodenCardUI } from './Dadhboard_UI_Components/wooden_card';
import { retroGradient } from '../../assets/styles/retro_theme_sheet';
import { HSizedBox, VSizedBox } from '../UI/spaces';

const DashboardScreen = ({ navigation }) => {
  // List of values for the wooden cards
  const woodenCardValues = [
    { id: 1, label: '2x2' },
    { id: 2, label: '3x3' },
    { id: 3, label: '4x4' },
    { id: 4, label: '5x5' },
    { id: 5, label: '6x6' },
    { id: 6, label: '7x7' },
    { id: 7, label: '8x8' },
    { id: 8, label: '9x9' },
  ];

  return (
        <ImageBackground 
     source={require('../../assets/images/Dashboard.jpg')}
     
  >

    <View>
      <AppBar
        centerIcon="home"
        title="Home"
        onLeftPress={() => console.log('Left icon pressed')}
        onRightPress={() => console.log('Right icon pressed')}
      />
              <VSizedBox height={10} />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {woodenCardValues.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <WoodenCardUI label={card.label} height={90} width={200} fontSize={35} />
          </View>
        ))}
      </ScrollView>
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({

 
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  cardContainer: {
    marginBottom: 20,
  },
});

export { DashboardScreen };