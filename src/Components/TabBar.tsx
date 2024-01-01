import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

type TabItem = {
  label: string;
};

type TabBarProps = {
  tabs: TabItem[];
};
const TabBar: React.FC<TabBarProps> = ({ tabs }: TabBarProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);
    const handleChangeTab = (label) => {
        setActiveTab(label);
      };
    
    return (
        <View style={styles.tabContainer}>
            {tabs.map((tab, index) => (
                <TouchableOpacity key={index} onPress={()=>handleChangeTab(tab.label)} style={tab.label === activeTab?styles.activeTab: null}>
                    <Text style={tab.label === activeTab?styles.activeText: null}>{tab.label}</Text>
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
        alignContent: 'center',
        verticalAlign: 'middle',
        paddingBottom: 12,
    },
    activeTab: {
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: "#94B49F",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    activeText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
    
  });
  
export default TabBar;
