
import React from 'react';
import { View, Text} from 'react-native';

const Card = ({item}) => {
    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    );
};

export default Card;