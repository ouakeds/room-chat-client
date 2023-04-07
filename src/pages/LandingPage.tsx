import * as React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate(`/chat`);
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', bgcolor: 'background.default', p: { xs: 2, md: 4 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: { xs: 48, md: 64 } }}>
            Live Rooms
          </Typography>
          <Typography variant="h5" sx={{ color: 'secondary.main', fontSize: { xs: 18, md: 24 }, mt: 2 }}>
            A real time chat developed with Socket.IO, Node.js Express for the server, React.js for the frontend
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }} onClick={handleCreateRoom}>
            Create or Join a room
          </Button>
        </Container>
      </Grid>
      <Grid item xs={12} md={6} sx={{ bgcolor: 'primary.main', display: { xs: 'none', md: 'block' } }}>
        <img src="/illustration.png" alt="illustration-messages" style={{ width: '100%', height: '100%' }} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
