import { StyleSheet ,Dimensions} from 'react-native';
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get('window').height,

  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 40,
    fontWeight: "700",

  },
  subtitle: {
    fontSize: 16,
    color:"black",
  },


  taglineCTA: {
    textDecorationLine: 'underline',


  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  buttonContainer: {
    bottom: 50,
    position: "absolute",
    width: "100%"
  }

});

export default styles;