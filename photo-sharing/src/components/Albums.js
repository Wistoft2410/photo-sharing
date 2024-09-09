import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'; // Make sure StyleSheet is included
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Seperator from './Seperator';

const Albums = ({ navigation }) => {
    return (
        <>
        <ScrollView>
            <View style={styles.albumContainer}> 
                {albumPage.map((item, index) => 
                <View key={index}> 
                    <Card item={item}/>
                
                {/* Add seperator if the index is 1 */}
                {index === 1 && <Seperator />}
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