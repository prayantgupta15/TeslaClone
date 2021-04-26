import React from 'react';

import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';


// Button
import StyledButton from '../StyledButton';


const CarItem = (props) => {
    return (

        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}></ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69K</Text>
            </View>

            <StyledButton type="primary"
                content="Custom Order"
                onPress={() => {
                    console.warn('Custom Order');
                }}

            />


<StyledButton type="secondary"
                content="Existing Inventory"
                onPress={() => {
                    console.warn('Existing Inventory');
                }}

            />

        </View>

    );
};

export default CarItem;