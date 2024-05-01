import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UniversityMarkers(props) {
// รับ props เข้ามา , .item คือ arrey
  return props.items.map((item) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.name}
      key={item.id.toString()}
      description={item.address}
    >
        {/* ใส่ FontAwesome ระหว่าง marker จะเปลี่ยน icon ของ marker */}
        <FontAwesome name="university" size={20} color="tomato" />
    </Marker>
  ));
}


