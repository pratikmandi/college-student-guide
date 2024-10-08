import { Text, View, StyleSheet,Platform } from 'react-native'

const Profile = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#202123',
    }}>
      <Text style={{color:'white'}}>Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'black',
    // fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'Roboto',
    fontSize: 24,
    fontWeight: 'medium',
    // alignContent:'center',
    marginTop: 4,
    paddingLeft: 15
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    marginVertical: 9,
    alignSelf: 'center',
  },
  cardElevated: {
    backgroundColor: '#F7F7F7',
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
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 2,
  },
  cardSubtitle: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 2,
    textAlign: 'right',
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 5,
    marginTop: 2,
  },
  cardFooter: {
    color: '#000000',
    marginBottom: 5,
  },
});

export default Profile