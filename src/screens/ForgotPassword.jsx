// import React, { useState } from 'react';
// import {
//   ThemeProvider, createTheme,
//   CssBaseline, Container, Box,
//   Typography, TextField, Button,
//   Link, Paper, InputAdornment
// } from '@mui/material';
// import { Email } from '@mui/icons-material';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#0077e5',
//     },
//     background: {
//       default: '#1a1a2e',
//       paper: '#16213e',
//     },
//   },
//   typography: {
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     h4: {
//       fontWeight: 700,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           textTransform: 'none',
//           fontSize: '1rem',
//           fontWeight: 600,
//           padding: '10px 0',
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 8,
//           },
//         },
//       },
//     },
//   },
// });

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Password reset requested for:', email);
//     // Here you would typically handle the password reset logic
//   };

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           background: 'linear-gradient(45deg, #1a1a2e 0%, #16213e 100%)',
//         }}
//       >
//         <Container maxWidth="xs">
//           <Paper 
//             elevation={10}
//             sx={{
//               p: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               borderRadius: 4,
//               backdropFilter: 'blur(10px)',
//               backgroundColor: 'rgba(22, 33, 62, 0.8)',
//             }}
//           >
//             <Box
//               component="img"
//               src="/api/placeholder/100/100"
//               alt="Logo"
//               sx={{ width: 80, height: 80, mb: 2 }}
//             />
//             <Typography component="h1" variant="h4" gutterBottom>
//               Forgot Password
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', textAlign: 'center' }}>
//               Enter your email address and we'll send you a link to reset your password.
//             </Typography>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Email />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Reset Password
//               </Button>
//               <Box sx={{ mt: 2, textAlign: 'center' }}>
//                 <Link href="#" variant="body2" sx={{ color: 'primary.main' }}>
//                   Remember your password? Sign In
//                 </Link>
//               </Box>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default ForgotPasswordPage;

import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography, 
  Link,
  ThemeProvider, 
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';

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

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '90%',
  margin: '0 auto',
}));

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
              paddingTop: (theme) => theme.spacing(6) // Added extra padding at the top
            }}>
              <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                Enter your email address and we'll send you a link to reset your password.
              </Typography>
              <StyledForm noValidate>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <StyledButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#0077e5' }}
                >
                  Reset Password
                </StyledButton>
              </StyledForm>
            </CardContent>
          </StyledCard>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Remember your password?{' '}
            <Link href="#" variant="body2">
              Log in
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;