import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Header from '../component/Header.component';
import OxoloPlayer from '../component/OxoloPlayer.component';
import PageLayout from '../component/PageLayout.component';

export default function MainPlayer() {
  const [text, setText] = useState<string>();
  return (
    <PageLayout>
      <Header text='Custom Video Player' />
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            value={text}
            fullWidth
            label='Your Text'
            id='fullWidth'
            placeholder='Please type your text in here'
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <OxoloPlayer />
      </Box>
    </PageLayout>
  );
}
