import React, { useEffect, useState } from "react";
import DemoCard from "../../../components/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig/firebaseConfig";
import Loader from "../../../components/Loader";
import { Box } from "@mui/material";

const AllCourses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const querySnapshot = await getDocs(collection(db, "AllCourses"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push({
          ...doc.data(),
          docId: doc.id,
        });
        setData([...data]);
      });
    };
    getDataFromFirestore();
  }, []);

  console.log(data);

  return (
    <>
      {data.length === 0 ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
        >
          <Loader />
        </Box>
      ) : (
        <div className="d-flex flex-wrap">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <DemoCard
                  courseName={item.CourseName}
                  link={`/adminDashboard/allCourses/${data[index].docId}`}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AllCourses;
