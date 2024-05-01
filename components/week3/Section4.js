import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Section4(){
    return (
        <View style = {{borderTopWidth: 1, borderBottomWidth: 1 , padding: 10 , marginTop: 10}}> 
            <Text style={{ fontSize : 17 , fontWeight: 'bold'}}>Hotel Description</Text>
            <Text style={{ fontSize : 15 }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
        </View>



    )
}