import React from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';

import cars from '../../assets/cars';

import CarItem from '../carItem/index';

import styles from './styles';
const CarList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={
                    ({ item }) => <CarItem car={item} />
                }

showsVerticalScrollIndicator={false}
                snapToAlignment='start'
                decelerationRate='normal'
                snapToInterval={Dimensions.get('window').height}
            />

        </View>
    );
}

export default CarList;
