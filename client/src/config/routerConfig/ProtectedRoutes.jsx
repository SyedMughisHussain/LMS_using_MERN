import { Box } from "@mui/material";
import Loader from "../../components/Loader";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig/firebaseConfig";

function ProtectedRoutes(props) {
  const { component } = props;

  //state
  const [loader, setLoader] = useState(true);

  //navigate
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLoader(false);
        console.log("user is login");
        console.log(user.uid);
      } else {
        setLoader(false);
        navigate("/login");
      }
    });
  });
  return (
    <>
      {loader ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
        >
          <Loader />
        </Box>
      ) : (
        component
      )}
    </>
  );
}

export default ProtectedRoutes;