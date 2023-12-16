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

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    if (password !== confirmPassword) {
      return;
    } else {
      console.log("data sending...");
      fetch("http://localhost:5000/sign-up", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email,
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
          navigate("/login");
        });
    }
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
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                defaultValue=""
                fullWidth
                margin="normal"
                required
                label="username"
                name="username"
                type="text"
                autoFocus
                {...register("username", { required: true })}
                aria-invalid={errors.username ? "true" : "false"}
              />
              <TextField
                defaultValue=""
                fullWidth
                margin="normal"
                required
                label="Email Address"
                name="email"
                type="email"
                autoFocus
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              <TextField
                defaultValue=""
                fullWidth
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                autoFocus
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <TextField
                defaultValue=""
                fullWidth
                margin="normal"
                required
                name="confirmPassword"
                label="confirmPassword"
                type="password"
                autoFocus
                {...register("confirmPassword", { required: true })}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Sign Up
              </Button>
              <Link href="/login" variant="body2">
                {"Have an account? Login"}
              </Link>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
