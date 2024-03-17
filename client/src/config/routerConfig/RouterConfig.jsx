import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "../../screens/adminDashboard/AdminDashboard";
import StudentDashboard from "../../screens/studentDashboard/StudentDashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { auth } from "../firebaseConfig/firebaseConfig";
import Admission from "../../screens/Admission/Admission";
import LogIn from "../../screens/login/Login";


const RouterConfig = () => {
  const [type, setType] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("user is login");
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.data().type);
          setType(doc.data().type);
        });
      } else {
        console.log("User is not logged In!");
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes
              component={
                type === "admin" ? <AdminDashboard /> : <StudentDashboard />
              }
            />
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/adminDashboard/*" element={<AdminDashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
