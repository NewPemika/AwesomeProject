import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Section7(){
    return(
        <View style = {{marginTop: 10 , borderBottomWidth: 1, padding: 10}}>
            <View>
                <Text style={{ fontSize : 15 , fontWeight: 'bold'}}>Room Type</Text>            
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <View>
                    <Image style={{ borderRadius: 15 , width: 150 , height:175 }} source={require("../../assets/week3/room-8.jpg")}></Image> 
                </View>
                <View style = {{marginLeft: 10 }}>
                    <Text style={{ fontSize : 18 , fontWeight: 'bold', padding: 10}}>Standard Twin Room</Text>
                    <Text style={{ fontSize : 20 , color: 'orange', paddingTop: 70}}>$399.99</Text> 
                    <Text style={{ fontSize : 15 , color: 'lightblue'}}>Hurry Up! This is your last room!</Text>     
                </View>

            </View>


        </View>
    )
}