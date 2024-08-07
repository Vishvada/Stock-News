import React from 'react';
import { Container, Typography, Paper, Grid, Box, ThemeProvider, createTheme, Avatar, Chip, Button } from '@mui/material';
import { TrendingUp, Newspaper, School, Code, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { pages } from '../utils/pagePaths';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0077e5',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#141a22',
      paper: '#1e2632',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

const FeatureCard = ({ Icon, title, description }) => (
  <Paper elevation={3} sx={{ 
    height: '100%', 
    transition: 'transform 0.3s, box-shadow 0.3s', 
    '&:hover': { 
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.3)'
    },
    backgroundColor: 'background.paper'
  }}>
    <Box p={3} display="flex" flexDirection="column" alignItems="center" textAlign="center" height="100%">
      <Icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
      <Typography variant="h6" gutterBottom color="text.primary">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  </Paper>
);

const AboutPage = () => {
    let navigate=useNavigate();
  const handleHomeClick = () => {
    console.log("Navigating to home page");
    navigate(pages.home)
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Home />}
              onClick={handleHomeClick}
              sx={{ fontWeight: 'bold' }}
            >
              Home
            </Button>
          </Box>

          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6, color: 'primary.main' }}>
            About StockSmart
          </Typography>
          
          <Box p={4}>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, textAlign: 'center', color: 'text.primary' }}>
              Your Personalized Stock News and Learning Platform
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: 'center', maxWidth: '800px', mx: 'auto', color: 'text.secondary' }}>
              StockSmart empowers investors with tailored stock news and fundamental analysis education. Our platform combines real-time updates with comprehensive learning resources to help you make informed investment decisions.
            </Typography>
            
            <Grid container spacing={4} sx={{ mb: 6 }}>
              <Grid item xs={12} md={4}>
                <FeatureCard 
                  Icon={TrendingUp}
                  title="Personalized Stock News"
                  description="Get the latest updates for your selected stocks. Our platform curates news based on your interests."
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FeatureCard 
                  Icon={Newspaper}
                  title="Customized News Feed"
                  description="Stay informed with a tailored news feed. Never miss important updates that could affect your portfolio."
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FeatureCard 
                  Icon={School}
                  title="Fundamental Analysis Education"
                  description="Learn to read company financials. Master the basics of fundamental analysis to evaluate stocks effectively."
                />
              </Grid>
            </Grid>
            
            <Box sx={{ bgcolor: 'primary.main', color: 'background.default', p: 4, borderRadius: 2, mb: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: 'background.default' }}>
                Why Choose StockSmart?
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'center', color: 'background.default' }}>
                Our platform caters to both novice and experienced investors. Whether you're just starting out or looking to refine your strategy, StockSmart provides the tools and knowledge you need to navigate the stock market with confidence.
              </Typography>
              <Typography variant="h6" sx={{ textAlign: 'center', color: 'background.default' }}>
                Join StockSmart today and take control of your investment journey!
              </Typography>
            </Box>

            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: 'primary.main', mb: 4 }}>
                Meet Our Developers
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Avatar sx={{ width: 100, height: 100, mb: 2, bgcolor: 'primary.main' }}>
                  <Code fontSize="large" />
                </Avatar>
                <Typography variant="h6" gutterBottom color="text.primary">
                  Developed by Students from IIT Bhubaneswar
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'center', maxWidth: '600px', mb: 3, color: 'text.secondary' }}>
                  StockSmart is proudly developed by a team of passionate and talented students from the Indian Institute of Technology (IIT) Bhubaneswar. Our team combines cutting-edge technology with financial expertise to bring you a powerful and user-friendly platform.
                </Typography>
                <Chip label="Made with ❤️ at IIT Bhubaneswar" color="primary" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;