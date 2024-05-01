import React, { useState } from "react";
import { TouchableOpacity, View , Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() { 

    const [heartbeat_c , setHeartbeat] = useState('0')
    
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let count = Number(heartbeat_c) + 1;
        setHeartbeat(count)

    };


    return (
        <View>
            <View style = {{flexDirection: 'row' , padding: 20, justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={50} color="pink" />
                </TouchableOpacity>
                <Text style={{ fontSize : 20}}>{heartbeat_c}</Text>
            </View>
        </View>
    );
}
