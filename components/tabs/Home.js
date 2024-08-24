import React from 'react';
import { View,Text, StyleSheet, Linking } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.appInfoContainer}>
        <Text style={styles.appTitle}>BIT Mesra</Text>
        <View style={styles.underline}></View>
        <Text style={styles.appVersion}>Version 1.0.0</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem 
      label="Institute Website"
      labelStyle={{color:'white'}}
      onPress={()=>Linking.openURL('https://bitmesra.ac.in/1')}
      // activeBackgroundColor='#101318'
      // activeTintColor='#101318'
      />
      <DrawerItem 
      label="ERP"
      labelStyle={{
        color:'white'}}
      onPress={()=>Linking.openURL('https://erpportal.bitmesra.ac.in/login.htm')}
      // activeBackgroundColor='#101318'
      // activeTintColor='#101318'
      />

<DrawerItem 
      label="Placement Portal"
      labelStyle={{
        color:'white'}}
      onPress={()=>Linking.openURL('https://tp.bitmesra.co.in/login.html')}
      // activeBackgroundColor='#101318'
      // activeTintColor='#101318'
      />
      <View style={styles.appDevContainer}>
        <Text style={styles.appDev}>by Pratik Mandi</Text>
      </View>
    </DrawerContentScrollView>
  );
};


const HomeDrawer = () =>{
return(
  <Drawer.Navigator initialRouteName="Home" 
  drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{ 
        headerShadowVisible:false,
        headerStyle:{
          backgroundColor:'#101318',
        },
        headerTitleStyle:{color:'white'},
        headerTitleContainerStyle:{marginStart:1},
        headerShown: true,
        headerTintColor:'white',
      drawerStyle:{
        backgroundColor:'#101318',
        marginTop:40,
        marginBottom:90,
        // borderRadius:20,
        borderBottomRightRadius:20,
        borderTopRightRadius:20
      },
      drawerActiveTintColor:'#e73e36',
      drawerType:'front',
       }} 
    />
    </Drawer.Navigator>
)
}

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <HomeDrawer/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appInfoContainer: {
    paddingLeft: 20,
    backgroundColor: '#101318',
    marginBottom: 20,
    borderRadius: 10,
  },
  appTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appVersion: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
  },
  appDevContainer: {
    paddingLeft: 20,
    backgroundColor: '#101318',
    marginTop:350,
    marginBottom: 10,
    borderRadius: 10,
  },
  appDev: {
    color: 'gray',
    fontSize: 15,
    fontWeight: 'medium',
    marginTop:30,
    marginBottom:5
  },
  underline:{
    borderBottomWidth:2,
    borderBottomColor:'#e73e36',
    marginVertical:5,
    justifyContent:'center',
    // marginLeft:1.2,
    width:80,
  }
});


export default Home;
