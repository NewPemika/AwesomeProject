import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props) {  

    
    const [onlineEvents, setOnlineEvents] = useState ([]);

    const loadOnlineEvents = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineEvents(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineEvents();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize : 20 }}>Up Coming Events</Text>
            <Text style={{ color:"grey" }}>What's the Worst That Could Happened</Text>
            <FlatList
                horizontal={true}
                // data={tours}
                data = { onlineEvents }
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginLeft: 5 }}>
                                <Image style={{ width:300, height :250, borderTopLeftRadius:10, borderTopRightRadius: 10 , marginTop: 10 }} source={{ uri : item.uri}} />
                                <View style={{ flexDirection: 'row', marginBottom : 75, height : 80 , width: 300, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10 , borderWidth: 1.5, borderColor: 'black' }}>
                                    <View style = {{marginLeft: 5 }}>
                                        <Text style={{ fontSize:20, color : "red", fontWeight: 'bold', textAlign: 'center'}}>{item.month}</Text>
                                        <Text style={{ fontSize:15, color : "black", textAlign: 'center'}}>{item.date}</Text>
                                    </View>
                                    <View style = {{marginLeft: 10}}>
                                        <Text style={{ fontSize:20, color : "black", fontWeight: 'bold' }}>{item.title}</Text>
                                        <Text style={{ fontSize:10, color : "grey"}}>{item.datetime}</Text>
                                        <Text style={{ fontSize:10, color : "grey"}}>{item.place}</Text>
                                    </View>
                                </View>  
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
            
            
        </View>
    );
}

