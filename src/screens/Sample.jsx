import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { useThemeStore } from '../store/authStore';

const Sample = () => {
  const {theme, toggleTheme} = useThemeStore();
  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      <TouchableOpacity
        className="text-black"
        onPress={() => {
          toggleTheme();
        }}>
        <Text className="text-white text-center" style={{color: theme?.light}}>
          Press
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Sample;
