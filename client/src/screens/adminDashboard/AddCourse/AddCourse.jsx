import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sendData } from "../../../config/firebaseConfig/firebaseMethods";
import { Collapse } from "@mui/material";
import AlertBox from "../../../components/Alert";

const defaultTheme = createTheme();

export default function AddCourse() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    const data = new FormData(event.currentTarget);
    console.log({
      TeacherName: data.get("teacherName"),
      CourseName: data.get("courseName"),
      Timing: data.get("fav_Time"),
    });
    sendData(
      {
        TeacherName: data.get("teacherName"),
        CourseName: data.get("courseName"),
        Timing: data.get("fav_Time"),
      },
      "AllCourses"
    )
      .then((res) => {
        console.log("Added Data Successfully");
        setOpen(false);
        const teacherName = document.querySelector("#teacherName");
        const courseName = document.querySelector("#courseName");
        teacherName.value = "";
        courseName.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Collapse in={open}>
        <AlertBox message={"New Course Added Successfully."} />
      </Collapse>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add New Course
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              id="teacherName"
              required
              fullWidth
              name="teacherName"
              label="Teacher Name"
              autoFocus
            />
            <TextField
              id="courseName"
              margin="normal"
              required
              fullWidth
              name="courseName"
              label="Enter Couse Name"
            />
            <p>Choose the best time</p>
            <>
              <input
                type="radio"
                id="mwf"
                name="fav_Time"
                defaultValue="MWF"
                defaultChecked
              />
              &nbsp; <label htmlFor="mwf">MWF</label>
              <br />
              <input type="radio" id="tts" name="fav_Time" defaultValue="TTS" />
              &nbsp; <label htmlFor="tts">TTS</label>
              <br />
            </>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
