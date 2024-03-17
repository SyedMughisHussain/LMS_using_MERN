import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../config/firebaseConfig/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Avatar from '@mui/material/Avatar';

export default function AllStudentsTable() {
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const q = query(collection(db, "users"), where("type", "==", "student"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        allStudents.push({
          ...doc.data(),
          docId: doc.id,
        });
        setAllStudents([...allStudents]);
      });
    };
    getDataFromFirestore();
  }, []);

  console.log(allStudents);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              colSpan={3}
              sx={{
                fontSize: "25px",
              }}
            >
              All Students
            </TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
              }}
            >
              Student Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Course
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Gender
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Phone
            </TableCell>
            
            <TableCell
              sx={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Father Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
              }}
              align="right"
            >
              Image
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allStudents.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.fatherName}</TableCell>
              <TableCell align="right"><Avatar alt="Student Image" src={row.profileUrl} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
