import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, Divider, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
});

const NewsCard = ({ stockSymbol, news }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hasNews = news && news.length > 0;
  const latestNews = hasNews ? news[0] : null;

  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 345, m: 2, bgcolor: 'background.paper' }}>
        <CardContent>
          <Typography variant="h6" component="div" sx={{ mb: 2, color: 'text.primary' }}>
            {stockSymbol}
          </Typography>
          {hasNews ? (
            <>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.primary' }}>
                {latestNews.text.length > 100 ? `${latestNews.text.substring(0, 100)}...` : latestNews.text}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {new Date(latestNews.date).toLocaleDateString()}
              </Typography>
            </>
          ) : (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              No recent news articles available.
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button 
            size="small" 
            onClick={handleClickOpen} 
            sx={{ color: 'primary.main' }}
            disabled={!hasNews}
          >
            {hasNews ? 'Read More News' : 'No News Available'}
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth PaperProps={{ sx: { bgcolor: 'background.paper' } }}>
        <DialogTitle sx={{ color: 'text.primary' }}>{`${stockSymbol} News`}</DialogTitle>
        <DialogContent>
          {hasNews ? (
            <List>
              {news.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={<Typography color="text.primary">{item.text}</Typography>}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                            {new Date(item.date).toLocaleDateString()}
                          </Typography>
                          {" — "}
                          <Button href={item.link} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: 'primary.main' }}>
                            Read Full Article
                          </Button>
                        </>
                      }
                    />
                  </ListItem>
                  {index < news.length - 1 && <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />}
                </React.Fragment>
              ))}

              {news.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={<Typography color="text.primary">{item.text}</Typography>}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                            {new Date(item.date).toLocaleDateString()}
                          </Typography>
                          {" — "}
                          <Button href={item.link} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: 'primary.main' }}>
                            Read Full Article
                          </Button>
                        </>
                      }
                    />
                  </ListItem>
                  {index < news.length - 1 && <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />}
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', my: 2 }}>
              No news articles are currently available for this stock.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'primary.main' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default NewsCard;