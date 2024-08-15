import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    backgroundColor:'#101318',
  },
  dayContainer: {
    marginHorizontal:20,
    marginVertical:5,
    padding: 10,
    backgroundColor: '#2C2F34',
    borderRadius: 10,
    elevation: 2,

  },
  dayTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#e73e36',
  },
  mealContainer: {
    marginVertical: 5,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.87)',
  },
  mealItems: {
    color: '#e0e0e0',
    fontSize: 16,
  },
  underlinemess:{
    borderBottomWidth:2,
    borderBottomColor:'#e73e36',
    width:50,
    justifyContent:'flex-start',
  }
});

export default styles