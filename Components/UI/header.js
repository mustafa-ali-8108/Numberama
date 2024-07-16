import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { WoodenCardUI } from '../DashboardScreen/Dadhboard_UI_Components/wooden_card';

const AppBar = ({ 
  leftIcon, 
  rightIcon, 
  title, 
  onLeftPress, 
  onRightPress 
}) => {
  return (
    <Surface style={styles.container} elevation={0}>
      <WoodenCardUI 
        label="" 
        width={50} 
        height={50} 
        fontSize={24} 
        iconName={leftIcon} 
        onPress={onLeftPress}
      />
      
      <View style={styles.centerContainer}>
        <WoodenCardUI
          label={title}
          height={50}
          width={200}
          fontSize={30}
        />
      </View>
      
      <WoodenCardUI 
        label="" 
        width={50} 
        height={50} 
        fontSize={24} 
        iconName={rightIcon} 
        onPress={onRightPress}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 4,
    backgroundColor: "transparent",
    borderRadius: 12,
    margin: 10
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12
  }
});

export { AppBar };