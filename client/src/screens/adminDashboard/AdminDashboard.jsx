import React from "react";
import { Routes, Route } from "react-router-dom";
import PersistentDrawerLeft from "../../components/Drawer";
import AddCourse from "./AddCourse/AddCourse";
import AllCourses from "./AllCourses/AllCourses";
import AllStudents from "./AllStudents/AllStudents";
import SingleCourse from "./SingleCourse/SingleCourse";
import LogIn from "./AddCourse/AddCourse";


const AdminDashboard = () => {
  return (
    <>
      <PersistentDrawerLeft
        screen={
          <Routes>
            <Route path="/" element={<AddCourse />} />
            <Route path="/allCourses" element={<AllCourses />} />
            <Route path="/allStudents" element={<AllStudents />} />
            <Route path="/allCourses/:id" element={<SingleCourse />}/>
          </Routes>
        }
      />
    </>
  );
};

export default AdminDashboard;
