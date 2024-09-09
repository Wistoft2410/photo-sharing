import React from 'react';
import { View, Text } from 'react-native';

const SharedAlbumTitleCard = ({ album }) => {
    return (
        <View>
            <Text>{album.title}</Text>
        </View>
    );
};

export default SharedAlbumTitleCard;