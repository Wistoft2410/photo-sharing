import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'; // Make sure StyleSheet is included
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';

const Albums = ({ i }) => {
    return (
        <>
        <ScrollView>
            <View style={styles.albumContainer}> 
                {albumPage.map((item, index) => 
                <View key={index}> 
                    <Text>{item.title}</Text>
                </View>
                )}
            </View>
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    albumContainer: {
        marginBottom: theme.spacing.l,
    }
})

export default Albums ;