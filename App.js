import React from 'react';
import { useFonts } from 'expo-font';
import { customFonts } from './src/constants/fonts';
import { HomeScreen } from './src/screens';

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return null;
  }
  return <HomeScreen />;
}
