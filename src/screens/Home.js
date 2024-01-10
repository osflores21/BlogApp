import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, Button, TextInput } from 'react-native-paper';
import CardPost from '../components/CardPost';
import Header from '../components/Header';
import { fetchData, fetchData2 } from '../services/services';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



const Home = ({ navigation }) => {

    const [post, setPost] = useState([])
    const [search, setSearch] = useState();

    const allData = async () => {
        const data = await fetchData();
        setPost(data);
    };

    useEffect(() => {
        allData();
    }, []);

    useFocusEffect(
        useCallback(() => {
            allData();
        }, [])
    );

    if (search === "") {
        allData();
    }
    return (
        <View style={styles.layout}>
            <Header />
            <View style={styles.contentSearch}>
                <TextInput
                    style={styles.contentInputSearch}
                    mode="outlined"
                    placeholder="Search post by autor, title or content"
                    value={search}
                    onChangeText={text => setSearch(text)}
                />
                <Button
                    style={styles.contentButtonSearch}
                    mode="contained"
                    onPress={async () => {
                        const newData = await fetchData2(search);
                        setPost(newData);
                    }}>
                    Search
                </Button>
            </View>
            <View style={styles.contentCard}>
                <FlatList
                    data={post}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CardPost {...item} navigation={navigation} />
                    )}
                    style={styles.flatList}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    layout: {
        width: wp(100),
        height: hp(100),
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentTitle: {
        width: wp(100),
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentCard: {
        width: wp(100),
        margin: 10
    },
    flatList: {
        height: hp(70),
        marginBottom: 10
    },
    contentSearch: {
        flexDirection: 'row',
        width: wp(100),
    },
    contentInputSearch: {
        width: wp(65),
        height: hp(5),
        margin: 10
    },
    contentButtonSearch: {
        margin: 10,
    },

})
export default Home