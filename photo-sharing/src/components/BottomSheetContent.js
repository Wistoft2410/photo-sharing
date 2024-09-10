import React from 'react';

const BottomSheetContent = () => {
    return (
        <View>
            <Text>I am a bottom sheet</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contenetWrapper: {
        backgroundColor: theme.colors.lightGray,
        padding: theme.spacing.m,
        height: 250,
    }
})

export default BottomSheetContent;