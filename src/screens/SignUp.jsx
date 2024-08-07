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
import { Link, useNavigate } from 'react-router-dom'
import { pages } from '../utils/pagePaths';
import { signupApi } from '../utils/api';

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
  minHeight: '400px',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await signupApi(name, email, password);
      if (response.error) {
        setError(response.message);
      } else {
        // Signup successful
        navigate(pages.stocks);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during signup');
    }
  };

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
            Sign Up
          </Typography>
          <StyledCard variant="outlined">
            <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              height: '100%',
              paddingTop: (theme) => theme.spacing(6),
            }}>
              <form onSubmit={handleSignUp} style={{display:"flex",flexDirection:'column',gap: '20px'}}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                    {error}
                  </Typography>
                )}
                <StyledButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#0077e5', mt: 3 }}
                >
                  Sign Up
                </StyledButton>
              </form>
            </CardContent>
          </StyledCard>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link to={pages.login} variant="body2">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;