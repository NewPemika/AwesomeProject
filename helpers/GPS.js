import React from "react";
import * as Location from "expo-location";

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
//   สร้าง pop up ขอ allow 
  // console.log(status);
  if (status !== "granted") {
    // console.log("Permission to access location was denied");
    return false;
  }
  let location = await Location.getCurrentPositionAsync({});
   //ดึงค่าจาก gps มาใช้งาน
    //   ถ้า return ค่า null  แปลว่า gps เกิดข้อผิดพลาด
  // console.log(location);
  if (location) {
    return location;
  } else {
    return false;
  }
};

export default { getLocation };


