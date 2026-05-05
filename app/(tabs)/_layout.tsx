import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '../components/haptic-tab';
import { IconSymbol } from '../components/ui/icon-symbol.ios';
import { Colors } from '../constants/theme';
import { useColorScheme } from '../hooks/use-color-scheme.web';
import "../global.css";
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
       <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="listCourses1"
        options={{
          title: 'ListCourses1',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
    </Provider>
   
  );
}
