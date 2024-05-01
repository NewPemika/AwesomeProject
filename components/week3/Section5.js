import React from "react";
import { View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5 (){
    return(
        <View style = {{flexDirection: 'row' ,  marginTop: 10}}>
            <MyIcon title="wifi" name="wifi" size={30} color="lightblue" />
            <MyIcon title="coffee" name="coffee" size={30} color="lightblue" />
            <MyIcon title="bath" name="bath" size={30} color="lightblue" />
            <MyIcon title="car" name="car" size={30} color="lightblue" />
            <MyIcon title="paw" name="paw" size={30} color="lightblue" />
        </View>
    )
    
}