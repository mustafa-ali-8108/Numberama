import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Surface, IconButton } from 'react-native-paper';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { inspiredRetroPalette } from '../../../assets/styles/retro_theme_sheet';

const WoodenCardUI = ({ label, width, height, fontSize, iconName, onPress }) => {
    const styles = createStyles(width, height, fontSize);
    const iconColor = inspiredRetroPalette.amberGold; 
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
                    {iconName && (
                        <IconButton
                            icon={iconName}
                            size={fontSize * 1.5}
                            onPress={onPress}
                            iconColor={iconColor}
                            style={styles.icon}
                        />
                    )}
                    <Text style={styles.text}>{label}</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const createStyles = (width, height, fontSize) => StyleSheet.create({
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
    icon: {
        margin: 0,
        position: 'absolute',
        backgroundColor: 'transparent',     },
    text: {
        color: '#fff',
        fontSize: fontSize,
        fontWeight: 'bold',
    },
});

export { WoodenCardUI };
