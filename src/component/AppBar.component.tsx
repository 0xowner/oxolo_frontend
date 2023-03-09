import { Box, Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PlayCircleRounded';
import { Link } from 'react-router-dom';

export default function ApplicationBar() {
  const pages = [
    {
      name: 'Player',
      route: '',
    },
    {
      name: 'History',
      route: 'history',
    },
  ];
  return (
    <AppBar>
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='/'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Oxolo
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'right',
          }}
        >
          {pages.map((page) => (
            <Link to={`/${page.route}`} key={page.name}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
