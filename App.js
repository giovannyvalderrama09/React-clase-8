import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Generar una variable que permita definir las pantallas donde se va a navegar

const Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" //Alias de la pantalla
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Perfil del usuario" }}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Tablero principal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 10 }}
        onPress={() => {
          navigation.navigate("Profile", {
            name: "Giovanny",
            userName: "Gio",
            rol: 2,
          });
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Perfil del usuario</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>
        Bienvenido {route.params.name}, con nombre de usuario:{" "}
        {route.params.userName}
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: "lightseagreen", padding: 10, borderRadius: 10, marginTop: 15 }}
        onPress={() =>{
          route.params.rol == 1 ? navigation.navigate('Dashboard') : navigation.navigate('Home')
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Panel de control</Text>
      </TouchableOpacity>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Tienes el rol adminitrador del sistema</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
