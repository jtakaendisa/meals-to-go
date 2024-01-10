import { Camera, CameraType } from 'expo-camera';
import { useContext, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ProfileCamera } from './CameraScreen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../../services/authentication/authentication.context';
import { User } from 'firebase/auth';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current?.takePictureAsync();

      if (photo) {
        AsyncStorage.setItem(`${(user as User).uid}-photo`, photo.uri);
        navigation.goBack();
      }
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission?.granted) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera ref={cameraRef} type={CameraType.front}>
      <TouchableOpacity style={{ flex: 1 }} onPress={snap} />
    </ProfileCamera>
  );
};

export default CameraScreen;
