import React from 'react';

import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';


// Button
import StyledButton from '../StyledButton/index';


const CarItem = (props) => {

    const { name, tagline, image, taglineCTA } = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image}></ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}&nbsp;

                    <Text style={styles.taglineCTA}>
                        {taglineCTA}
                    </Text>

                </Text>

            </View>

            { <View style={styles.buttonContainer}>

                <StyledButton
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn('Custom Order');
                    }} />


                <StyledButton
                    type="secondary"
                    content="Existing Inventory"
                    onPress={() => {
                        console.warn('Existing Inventory');
                    }} />

            </View>
            }


        </View>

    );
};

export default CarItem;