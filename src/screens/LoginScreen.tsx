import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button} from 'react-native-paper';
import { Routes } from '../navigation/Routes';
import MainTitle from '../components/Title';


export default function LoginScreen (props : any) {

  const [text, setText] = React.useState("");
  const [hidepass, setHidePass] = React.useState(true);

  function managePasswordVisibility () {
    setHidePass(!hidepass);
  };

  function navigateToFeed() {
    props.navigation.navigate(Routes.SPACECRAFT_LIST_SCREEN);
  }
  
  function navigateToTerms() {
    props.navigation.navigate(Routes.TERMS_SCREEN);
  }

  return (
    <ScrollView style={styles.back}>
        <View style={styles.container}>
          <MainTitle title= "SPACECRAFT"/>
        </View>

        <View style={styles.form}>
          <React.Fragment>
            <TextInput 
              label="Email"
              left= {<TextInput.Icon icon="email"/>}
              autoComplete={"email"} 
              underlineColorAndroid = "transparent" 
              style={styles.input}
              placeholderTextColor = "black" 
              value={text}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Password" 
              left= {<TextInput.Icon icon="lock"/>}
              autoComplete={"password"} 
              underlineColorAndroid = "transparent" 
              secureTextEntry={hidepass} 
              style={styles.input} 
              placeholderTextColor = "black" 
              value={text}
              right= {<TextInput.Icon icon={!hidepass ? "eye" : "eye-off"}  onPress={managePasswordVisibility}/>}
              onChangeText={text => setText(text)}
            />

            <Button mode="contained" style={styles.btn} onPress={navigateToFeed}>
              <Text style={styles.text}> Login </Text>
            </Button> 

            <TouchableOpacity onPress={navigateToTerms}>
              <Text style={styles.parag}> Read conditions and Tearms </Text>
            </TouchableOpacity>
          </React.Fragment>
        </View>
    </ScrollView>  
  );
}


const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10,
    fontSize: 52,
    color: "#FFC007",
  },

  back: {
    backgroundColor: 'black', 
  },

  container: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 40,
  },
 
  btn: {
    backgroundColor: "#FFC007",
    padding: 8,
    marginTop:7,
    alignSelf:'center',
    width: '70%',
    fontSize: 32,
    borderRadius: 50,
  },

  text: {
    color: "black",
    fontWeight: 'bold',
  },

  form: {
    padding: 20,
  },
   
  input: {
    marginBottom: 20,
  },

  parag: {
    textAlign: "center",
    fontSize: 18,
    padding: 20,
    fontStyle: "italic", 
    fontWeight: "bold",
    color: "white",
    marginTop: 20
  },

});
