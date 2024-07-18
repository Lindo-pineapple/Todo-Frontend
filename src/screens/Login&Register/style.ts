import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    left: '10%',
    margin: 30,
  },
  text_footer: {
    color: '#0076FE',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,

    paddingHorizontal: 15,

    borderWidth: 2,
    borderColor: '#0076FE',
    borderRadius: 50,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    color: '#b8b8b8',
    fontFamily: 'Sofia Pro Bold Az',
    fontSize: 20,
  },
  loginContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  forgotpasswordText: {
    color: '#0076FE',
    fontFamily: 'Sofia Pro Bold Az',
    fontSize: 18,
  },
  forgotpassword: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 8,
    marginRight: 10,
  },
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  text_header: {
    color: '#0076FE',
    fontFamily: 'Sofia Pro Bold Az',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    textAlign: 'center',
    margin: 20,
  },
  inBut: {
    width: '70%',
    backgroundColor: '#0076FE',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
  },
  inBut2: {
    backgroundColor: '#0076FE',
    height: 65,
    width: 65,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallIcon2: {
    fontSize: 40,
    // marginRight: 10,
  },
  bottomText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  textVerification: {
    marginLeft: 20,
    color: '#b30000',
    fontFamily: 'Sofia Pro Bold Az',
  },
});
