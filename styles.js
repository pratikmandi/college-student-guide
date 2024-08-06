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
    backgroundColor: 'white'
  },
  dayContainer: {
    marginHorizontal:20,
    marginVertical:10,
    padding: 10,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    elevation: 2,

  },
  dayTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  mealContainer: {
    marginVertical: 5,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  mealItems: {
    color: '#242B2E',
    fontSize: 16,
  },
});

export default styles