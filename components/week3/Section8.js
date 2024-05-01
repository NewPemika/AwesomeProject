import React from "react";
import { Text, View , Button } from "react-native";

export default function Section8(){
    return(
        <View style = {{flexDirection: 'row' , justifyContent: 'space-between', padding: 5 }}>
            <View>
                <Text style={{ fontSize : 15}}>Price</Text> 
                <Text style={{ fontSize : 20 , color: 'orange'}}>$399.99</Text> 
                <Text style={{ fontSize : 15}}>AVG/Night</Text>    
            </View>
            <View style = {{width: 100  }}>
                <Button title = 'Book Now' color= 'red' />
            </View>
            
        </View>
    )
}
