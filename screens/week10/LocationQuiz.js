import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GPS from "../../helpers/GPS";
import MyMapViewQuiz from "../../components/week10/MyMapViewQuiz";



export default function LocationQuiz() {
   const [location, setLocation] = useState(null);
  //ACTION WHEN ENTER SCREENS
  const onLoad = async()=>{
        let loc = await GPS.getLocation();
        if (loc) {
            //console.log("Location : ", loc);
            setLocation(loc);
        }
    };
    useEffect(() => {
        console.log("ENTER SCREEN");
        onLoad();
    }, []);




  //SCREEN UI
  return (
   <View style={{ flex: 1, flexDirection : 'column' }}>
   {/* <Text>{ JSON.stringify(location) }</Text> */}         

       

   <View style={{ flex: 1 }}>
        <MyMapViewQuiz location={location} setLocation={setLocation} />
      </View>               
</View>

  );
}