import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { colors } from "../colors"; 
import { auth } from "../../firebaseConfig";
import { useNavigate } from "../hooks/useNavigate";

export default function Profile() {
  const { navigate } = useNavigate(); 
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
        await signOut(auth); 
        navigate('home'); 
    } catch (error) {
        console.error("Error during logout", error);
    }
};

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {user ? (
          <>
            <Text style={styles.username}>Welcome, {user.displayName || "User"}!</Text>
            <Text style={styles.email}>{user.email}</Text>
          </>
        ) : (
          <Text style={styles.username}>No user logged in</Text>
        )}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileContainer: {
    backgroundColor: colors.inputs,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
  },
  username: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: colors.ice,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: colors.orange,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});
