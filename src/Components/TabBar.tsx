import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

type TabItem = {
  label: string;
  onPress: () => void;
};

type TabBarProps = {
  tabs: TabItem[];
};

const TabBar: React.FC<TabBarProps> = ({ tabs }: TabBarProps) => {
  return (
    <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
            <TouchableOpacity key={index} onPress={tab.onPress}>
            <Text>{tab.label}</Text>
            </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",   
    }
    
  });
  
export default TabBar;
