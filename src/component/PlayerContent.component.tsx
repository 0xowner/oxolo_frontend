import { Snackbar, TextField } from '@mui/material';
import { PlayerRef, Player } from '@remotion/player';
import { useEffect, useRef, useState } from 'react';
import DraggableText from './DraggableText/DraggableText.component';
import { IPosition, IVisulInfo } from '../general/interface';
import { useMutation } from '@tanstack/react-query';
import { defaultHeader, SaveNewVisualInfoAddress } from '../general/serviceAddress';
import UsertAlert from './UserAlert.component';

export const PlayerContent = ({ serviceResult }: IPlayerContent) => {
  const [open, setOpen] = useState<boolean>(false);
  // text are handled in two ways: movable input box and fixed one
  const [text, setText] = useState<string | undefined>(
    serviceResult.text || 'new text'
  );
  const [position, setPosition] = useState<IPosition | undefined>(
    serviceResult.position || { x: 0, y: 0 }
  );

  // load text after getting information from server
  useEffect(() => {
    setText(serviceResult.text);
  }, [serviceResult]);

  // manage player statuse when content is changing
  const playerRef = useRef<PlayerRef>(null);
  const pause = () => playerRef?.current?.pause();
  const play = () => playerRef?.current?.play();

  // pause the player for edditing the text
  const textChanged = (e: any) => {
    pause();
    setText(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') saveInformation();
  };

  const saveInformation = () => {
    addVisualInfo.mutate({
      text,
      position,
    });
  };
  const addVisualInfo = useMutation({
    mutationFn: (info: any) =>
      fetch(SaveNewVisualInfoAddress, {
        method: 'post',
        headers: defaultHeader,
        body: JSON.stringify(info),
      }).then(() => {
        setOpen(true);
      }),
  });

  return (
    <>
      <TextField
        value={text}
        fullWidth
        label='Your Text'
        id='fullWidth'
        placeholder='Please type your text in here'
        onChange={textChanged}
        onKeyDown={handleEnter}
        helperText='Press enter to save changes'
      />
      <Player
        ref={playerRef}
        inputProps={{
          pause,
          play,
          text,
          setText,
          position: serviceResult.position,
          setPosition,
          setOpen,
          saveInformation,
        }}
        component={DraggableText}
        compositionWidth={1000}
        compositionHeight={400}
        durationInFrames={1000}
        fps={60}
        controls
        loop
        clickToPlay={false}
      />
      <UsertAlert
        open={open}
        setOpen={setOpen}
        text={'information saved successfully!'}
      />
    </>
  );
};

interface IPlayerContent {
  serviceResult: IVisulInfo;
}
