import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig/firebaseConfig";
import Loader from "../../../components/Loader";

const SingleCourse = () => {
  let { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getDocumentById = async () => {
      const docRef = doc(db, "AllCourses", id);
      const docSnap = await getDoc(docRef);
      data.push(docSnap.data());
      setData([...data]);
      console.log(docSnap.data());
    };
    getDocumentById();
  }, []);

  console.log(data);

  return (
    <div className="d-flex justify-content-center">
      {data.length === 0 ? (
        <Loader />
      ) : (
        <div className="text-center text-light bg-secondary p-5">
          <h1>{data[0].CourseName}</h1>
          <h3>Teacher Name: {data[0].TeacherName}</h3>
          <h4>Days: {data[0].Timing}</h4>
        </div>
      )}
    </div>
  );
};

export default SingleCourse;
