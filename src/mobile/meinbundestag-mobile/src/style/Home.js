import { StyleSheet } from 'react-native';
import { colorMain } from './Colors';

const home = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },

  inputView: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    fontSize: 20,
    alignSelf: 'center',
    width: '80%',
  },

  inputContainer: {
    borderWidth: 0,
  },

  inputSuggestionText: {
    textAlign: 'center',
    margin: 5,
    fontSize: 14,
  },

  buttonView: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: colorMain,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colorMain,
    padding: 10,
    margin: 10,
    width: '66%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
    padding: 5,
    fontWeight: 'bold',
  },

});

export default home;