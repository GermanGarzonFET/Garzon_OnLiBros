import { ImageBackground, StyleSheet, Text, View } from "react-native";

const imgUrl ='src/vendor/img/logoFinal02.JPG'

const FondoMain = ()=>(
  <View style={styles.container}>
      <ImageBackground source={imgUrl} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
);




export default FondoMain;
