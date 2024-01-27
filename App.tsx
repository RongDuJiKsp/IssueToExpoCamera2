import {Button, View} from 'react-native';
import {Camera} from "expo-camera";
import {useEffect} from "react";

export default function App() {
    useEffect(() => {
        Camera.requestCameraPermissionsAsync().then();
    }, []);
    return (
        <View>
            <Camera barCodeScannerSettings={{barCodeTypes: ["qr"]}}
                    style={{height: "80%", width: "100%", marginTop: "10%"}}/>
            <Button title={"GET PERMISSIONS"} onPress={() => {
                Camera.requestCameraPermissionsAsync().then();
            }}/>
        </View>
    );
}

