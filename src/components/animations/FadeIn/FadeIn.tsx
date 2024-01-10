import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface Props {
  children: ReactNode;
}

const FadeInView = ({ children }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
