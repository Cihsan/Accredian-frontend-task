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
const defaultTheme = createTheme();

const SignUp = () => {
    
  const handleSignUp = event => {
    con
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
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
          <Paper sx={{ padding: 3, marginTop:3, marginBottom:2}}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSignUp}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                
                id="username"
                label="username"
                name="username"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                
                name="confirmPassword"
                label="confirmPassword"
                type="password"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Sign Up
              </Button>
              <Link href="login" variant="body2">
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
