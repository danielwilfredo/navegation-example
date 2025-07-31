import React, { createContext, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

const AuthContext = createContext(null);
export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:4000/api";

  const clearSession = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
    setAuthToken(null);
  };

  const logout = useCallback(async () => {
    try {
      await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      await clearSession();
      ToastAndroid.show("Sesión cerrada correctamente", ToastAndroid.SHORT);
      // No navegamos aquí, lo hace el componente que lo llama
    }
  }, [API_URL]);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("token", data.token);
        setAuthToken(data.token);
        setUser(data.userId);
        ToastAndroid.show("Inicio de sesión exitoso", ToastAndroid.SHORT);
        return true; // El componente que llama decide redirigir
      } else {
        ToastAndroid.show(data.message || "Error al iniciar sesión", ToastAndroid.SHORT);
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      ToastAndroid.show("Error de conexión con el servidor", ToastAndroid.SHORT);
      return false;
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/registerClients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        ToastAndroid.show("Cuenta registrada correctamente.", ToastAndroid.SHORT);
        return true;
      } else {
        const data = await response.json();
        ToastAndroid.show(data.message || "Error al registrar", ToastAndroid.SHORT);
        return false;
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      ToastAndroid.show("Error de conexión al registrar.", ToastAndroid.SHORT);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authToken,
        loading,
        login,
        logout,
        register,
        API: API_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
