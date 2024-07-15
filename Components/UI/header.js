import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, IconButton } from 'react-native-paper';
import { WoodenCardUI } from '../DashboardScreen/Dadhboard_UI_Components/wooden_card';

const AppBar = ({ 
  leftIcon, 
  rightIcon, 
  centerIcon, 
  title, 
  onLeftPress, 
  onRightPress 
}) => {
  return (
    <Surface style={styles.container} elevation={0}>
      <IconButton
        icon={leftIcon}
        size={24}
        onPress={onLeftPress}
      />
      
      <Surface style={styles.centerContainer}>
        <WoodenCardUI
          label={title}
          height={50}
          width={200}
          fontSize={30}     />
      </Surface>
      
      <IconButton
        icon={rightIcon}
        size={24}
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
    borderRadius: 12
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12

    
  },
  centerIcon: {
    margin: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { AppBar };
