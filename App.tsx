import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useAppTheme } from './src/context/ThemeContext';
import { TeamProvider } from './src/context/TeamContext';
import { RootNavigator } from './src/navigation/RootNavigator';

function Root() {
  const { mode, colors, isReady } = useAppTheme();

  if (!isReady) return null;

  const navTheme =
    mode === 'dark'
      ? {
          ...DarkTheme,
          colors: { ...DarkTheme.colors, background: colors.background, card: colors.surface, border: colors.border, text: colors.text, primary: colors.primary },
        }
      : {
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: colors.background, card: colors.surface, border: colors.border, text: colors.text, primary: colors.primary },
        };

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <TeamProvider>
          <Root />
        </TeamProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
