import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CameraView } from "expo-camera";

import { CameraViewProps } from "./props";
import { styles } from "./styles";

export default function CameraV({
  cameraRef,
  isRecording,
  onRecord,
  onStopRecording,
}: CameraViewProps) {
  return (
    <CameraView style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
  style={styles.buttonRecord} 
  onPress={isRecording ? onStopRecording : onRecord} 
  disabled={!isRecording} // O botão de "Stop" só estará habilitado se a gravação estiver em andamento
>
  <Text style={styles.buttonText}>
    {isRecording ? "Stop Recording" : "Start Recording" }
  </Text>
</TouchableOpacity>
      </View>
    </CameraView>
  );
}