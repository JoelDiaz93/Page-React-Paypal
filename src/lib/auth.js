import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db, storage } from "../fb";
import translateMessage from "../utils/translateMessage";
import { message } from "antd";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function useAuthProvider() {
  const [user, setUser] = useState(null);
  // const [dataUser, setDataUser] = useState(null);

  const handleUser = (user) => {
    if (user) {
      // si tengo sesión activa
      setUser(user);

      return user;
    } else {
      // no tengo sesión activa
      setUser(false);
      return false;
    }
  };

  async function register(data) {
    console.log("data", data);
    try {
      const userData = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("USER", user);
      const { uid } = userData.user;

      const snapshot = await storage.ref(`users/${uid}`).put(data.photo);
      console.log("file photo", snapshot);
      const photoURL = await snapshot.ref.getDownloadURL();

      const {
        nickname,
        email,
        name,
        lastname,
        phone,
        date,
        residence,
        address,
      } = data;
      await db.ref(`users/${userData.user.uid}`).set({
        nickname,
        email,
        name,
        lastname,
        phone,
        date,
        residence,
        address,
        photoURL,
        uid,
      });

      message.success("Usuario registrado");
      handleUser(user);
      //return true;
    } catch (error) {
      console.log("error", error);
      const errorCode = error.code;
      // message.error(translateMessage(errorCode));
      handleUser(false);
      throw error;
    }
  }

  async function login(email, password) {
    console.log("Email,password", email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log("User", user);
        handleUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("Error code:", errorCode);
        message.error(translateMessage(errorCode));
        handleUser(false);
      });
  }

  // async function infoUser(uid) {
  //   db.ref(`users/${user.uid}`).on("value", (snapshot) => {
  //     const data = snapshot.val();
  //     console.log("Data extraction: ", data);
  //     setDataUser(data);
  //     console.log("Data: ", dataUser);
  //   });
  // }

  async function logout() {
    try {
      await auth.signOut();
      handleUser(false);
    } catch (error) {}
  }

  // const sendPasswordResetEmail = (email) => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };
  //
  // const confirmPasswordReset = (password, code) => {
  //   const resetCode = code || getFromQueryString('oobCode');
  //
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(resetCode, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // }

  useEffect(() => {
    // try {
    const init = () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log("SESIÓN ACTIVA", user);

          const userInfo = await db.ref(`users/${user.uid}`).once("value");
          const obtener = userInfo.val();
          console.log("usuario in auth", obtener);
          handleUser({ ...user, ...obtener });

          // history.replace(Routes.HOME);
        } else {
          // User is signed out
          console.log("SIN SESIÓN", user);
          handleUser(false);
        }
      });
    };

    init();
    // } catch (error) {
    //   console.log("NO USER");
    // }
  }, []);

  return {
    user,
    register,
    login,
    logout,
    // sendPasswordResetEmail,
    // confirmPasswordReset
  };
}
