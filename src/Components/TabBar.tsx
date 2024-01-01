import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

type TabItem = {
  label: string;
};

type TabBarProps = {
  tabs: TabItem[];
  onTabChange: (label: string) => void;
};
const TabBar: React.FC<TabBarProps> = ({ tabs, onTabChange }: TabBarProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);
    const handleChangeTab = (label) => {
        setActiveTab(label);
        onTabChange(label); 
      };
    
    return (
        <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleChangeTab(tab.label)}
            style={[
              styles.tabItem,
              tab.label === activeTab ? styles.activeTab : null,
            ]}
          >
            <Text style={tab.label === activeTab ? styles.activeText : null}>{tab.label}</Text>
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
        paddingBottom: 12,
    },
    tabItem: {
        borderRadius: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
    activeTab: {
        backgroundColor: "#94B49F",
    },    
    activeText: {
        color: "white",
        fontFamily: "Bold",
    },    
  });
  
export default TabBar;
