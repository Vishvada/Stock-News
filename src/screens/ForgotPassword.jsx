import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography, 
  ThemeProvider, 
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';
import {Link} from 'react-router-dom'
import { pages } from '../utils/pagePaths';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0077e5',
    },
    background: {
      paper: '#333333',
    },
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  minHeight: '300px',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ForgotPassword = () => {
  const [email,setEmail]=useState('')
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#0077e5' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
            Forgot Password
          </Typography>
          <StyledCard variant="outlined">
            <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              height: '100%',
              paddingTop: (theme) => theme.spacing(6), // Added extra padding at the top
              gap:'20px'
            }}>
              <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                Enter your email address and we'll send you a link to reset your password.
              </Typography>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <StyledButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#0077e5' }}
                  onClick={()=>{console.log(email);forgotPassword(email)}}
                >
                  Reset Password
                </StyledButton>
            </CardContent>
          </StyledCard>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Remember your password?{' '}
            <Link to={pages.login} variant="body2">
              Log in
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;