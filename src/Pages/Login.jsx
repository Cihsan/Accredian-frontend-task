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
const defaultTheme = createTheme();
const Login = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLogin = data => {
    // Perform sign-up logic here
    console.log("Signing up with:", data.email, data.password);
  };
  //   const handleLogin = event => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     });
  //   };
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
          <Paper sx={{ padding: 3, marginTop:3, marginBottom:2}}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit(onLogin)}
              //   onSubmit={handleLogin}
            >
              <TextField
              control={control}
              defaultValue=""
                margin="normal"
                fullWidth
                id="email"
                label="Username or Email"
                autoComplete="email"
                autoFocus
                {...register("email", { required: true })}
                // rules={{ required: 'Username is required', minLength: { value: 4, message: 'Username must be at least 4 characters' } }}
                // name="email"
                // required
              />
              <p>{errors.email?.message}</p>
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                {
                  ...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 50,
                  })
                  // required
                  // name="password"
                  // id="password"
                }
              />
              <p>{errors.password?.message}</p>
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
