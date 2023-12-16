import {
  TextField,
  Button,
  ThemeProvider,
  Container,
  Box,
  Link,
  Typography,
  createTheme,
  Paper,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onLogin = data => {

    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        username: data.emailOrUsername,
        email: data.emailOrUsername,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        reset();
        navigate("/dashboard",);
      });
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="sm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Paper sx={{ padding: 3, marginTop: 3, marginBottom: 2 }}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit(onLogin)}
            >
              <TextField
                defaultValue=""
                margin="normal"
                fullWidth
                label="Username or Email"
                autoComplete="email"
                autoFocus
                {...register("emailOrUsername", { required: true })}
              />
              <p>{errors.email?.message}</p>
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                autoComplete="password"
                {...register("password", { required: true })}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Login
              </Button>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
