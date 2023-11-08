// CameraView.js
import React from 'react';
import { RNCamera } from 'react-native-camera';

const CameraView = () => {
  return (
    <RNCamera
      style={{ flex: 1 }}
      type={RNCamera.Constants.Type.back}
      // ... other props
    >
      {/* Your camera UI here */}
    </RNCamera>
  );
};

export default CameraView;
