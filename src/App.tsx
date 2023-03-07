import { Grid, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ApplicationBar from './component/AppBar.component';
import './App.css';
function App() {
  return (
    <>
      <ApplicationBar />
      <Container>
        <Grid container sx={{ marginTop: '80px' }}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: 'center',
              display: 'flex',
              border: '1px solid red',
              height: '600px',
              flexDirection: 'column',
              width: '100%',
              margin: 2,
            }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
