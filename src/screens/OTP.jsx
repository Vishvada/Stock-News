import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  Paper
} from '@mui/material';


const OtpInput = ({ onComplete }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value.substring(element.value.length - 1);
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        // Move to previous input on backspace if current field is empty
        inputRefs.current[index - 1].focus();
      } else if (otp[index]) {
        // Clear current field on backspace if it has a value
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6 && !isNaN(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }
    setOtp(newOtp);
    if (pastedData.length === 6) {
      inputRefs.current[5].focus();
    } else {
      inputRefs.current[pastedData.length].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.every(digit => digit !== '')) {
      onComplete(otp.join(''));
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }} style={{backgroundColor:"#333333",color:'white'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Enter Verification Code
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          We've sent a 6-digit code to your email
        </Typography>
        <Box component="form" onSubmit={handleSubmit} onPaste={handlePaste}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3}}>
            {otp.map((data, index) => (
              <TextField
                key={index}
                inputRef={(ref) => (inputRefs.current[index] = ref)}
                variant="outlined"
                margin="dense"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                inputProps={{
                  maxLength: 1,
                  style: { 
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    padding: '10px',
                    width: '40px',
                    height: '40px',
                    color:'#0077e5',
                    
                  }
                }}
                sx={{ mx: 0.5 }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              size="large"
              sx={{ mt: 2, px: 4 }}
            >
              Verify
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default OtpInput;