import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { app, db } from "../firebase/config";
import { auth } from "../firebase/config";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanUp
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  //register
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;
      if (error.message.includes("PassWord")) {
        systemErrorMessage = "A senha precisa contem pelo menos 6 digitos";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "Email já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // logout
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // login
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      let systemErrorMessage;
      switch (error.code) {
        case "auth/invalid-credential":
          systemErrorMessage = "E-mail ou senha incorretos";
          break;
        default:
          systemErrorMessage = "Ocorreu algum erro, por favor tente novamente!";
          break;
      }

      setError(systemErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
