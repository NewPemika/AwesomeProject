import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ padding : 20  }}>
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 16/4 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
        </View>    
    );
}