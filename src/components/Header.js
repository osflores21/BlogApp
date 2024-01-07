import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

const Header = () => {
    return (
        <View style={styles.contentTitle}>
            <Text variant="displayMedium">Personal Blog</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

})