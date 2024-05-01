import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Section6(){
    return(
        <View style = {{flexDirection: 'column', borderTopWidth: 1, borderBottomWidth: 1 , padding: 10 , marginTop: 10}}>
            <Text style={{ fontSize : 15 , fontWeight: 'bold'}}>Location</Text>            
            <Text style={{ fontSize : 10 , color: 'grey'}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            <View style = {{alignItems: 'center'}}>
                <Image style={{ flex : 1 , resizeMode : "cover" }} source={require("../../assets/week3/map.jpg")} />
            </View>
        </View>
    )
}