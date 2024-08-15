import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import React from 'react';

export default function Bus() {
  return (
    <View style={{
      backgroundColor: '#101318'
    }}>
      <ScrollView style={{
        marginBottom: 100,
      }}>

        {/* Staff Bus Timings: */}

        <Text style={styles.headingText}>Staff Bus Timings</Text>
        {/* <View style={styles.underline}></View> */}
        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>05:40 AM - 07:05 AM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sat</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            <Text style={styles.cardFooter}>Via Doranda, St.Xaviers' College</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>06:30 AM - 08:00 AM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sat</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            <Text style={styles.cardFooter}>Via Doranda, St.Xaviers' College</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>07:00 AM - 08:15 AM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sat</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via Doranda, St.Xaviers' College</Text> */}
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>09:10 AM - 01:05 PM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sun</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via Doranda, St.Xaviers' College</Text> */}
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>05:00 PM - 07:35 PM</Text>
              <Text style={styles.cardSubtitle}>Sat-Sun</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via Doranda, St.Xaviers' College</Text> */}
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>05:40 PM - 07:35 PM</Text>
              <Text style={styles.cardSubtitle}>Mon-Fri</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via Doranda, St.Xaviers' College</Text> */}
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>05:40 PM - 07:50 PM</Text>
              <Text style={styles.cardSubtitle}>Mon-Fri</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via Doranda, St.Xaviers' College</Text> */}
          </View>
        </View>

        {/* Student Bus Timings: */}

        <Text style={styles.headingText}>Student Bus Timings</Text>
        {/* <View style={styles.underline}></View> */}
        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>11:00 AM - 12:05 PM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sun</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            <Text style={styles.cardFooter}>Via RIMS, St.Xaviers' College</Text>
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>01:10 PM - 03:35 PM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sun</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via RIMS, St.Xaviers' College</Text> */}
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>03:30 PM - 05:35 PM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sun</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via RIMS, St.Xaviers' College</Text> */}
          </View>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>05:30 PM - 07:05 PM</Text>
              <Text style={styles.cardSubtitle}>Mon-Sun</Text>
            </View>
            <Text style={styles.cardLabel}>BIT Mesra - Lalpur</Text>
            <Text style={styles.cardDescription}></Text>
            {/* <Text style={styles.cardFooter}>Via RIMS, St.Xaviers' College</Text> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#e73e36',
    // fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'Roboto',
    fontSize: 20,
    // alignSelf: 'flex-start',
    marginTop: 4,
    fontWeight:'bold',
    paddingLeft: 17,
    marginVertical:2
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'center',
  },
  cardElevated: {
    backgroundColor: '#2C2F34',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 2,
  },
  cardSubtitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 2,
    textAlign: 'right',
  },
  cardLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: 'white',
    fontSize: 12,
    marginBottom: 5,
    marginTop: 2,
  },
  cardFooter: {
    color: '#E0E0E0',
    marginBottom: 5,
  },
  underline:{
    borderBottomWidth:2,
    borderBottomColor:'#e73e36',
    marginVertical:5,
    justifyContent:'flex-start',
    marginLeft:15,
    width:50
  }
});
