import { TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { AbsoluteFill } from 'remotion';
import { ITextElement } from '../../general/interface';
import './DraggableText.css';

/**
 *   The Draggable component for text editing and changing position
 *   input elements in this component can be replaced with any other components
 *
 * @export
 * @param {ITextElement} {
 *   text,
 *   setText,
 *   position,
 * }
 * @return {*}
 */
export default function DraggableText({
  text,
  setText,
  position,
  setPosition,
  saveInformation,
}: ITextElement) {
  const handleStop = (e: any, data: any) => {
    const position = {
      x: data.x,
      y: data.y,
    };
    setPosition(position);
    setLocalPosition(position);
    saveInformation();
  };

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      saveInformation();
    }
  };

  // Draggable component does not work directly with position props, so the localPosition defined here
  const [localPosition, setLocalPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    if (position) {
      setLocalPosition(position);
    }
  }, [position]);

  return (
    <>
      <AbsoluteFill style={AbsoluteStyle}>
        <Draggable onStop={handleStop} bounds='parent' position={localPosition}>
          <div>
            <TextField
              id='inputText'
              helperText='Press enter to save changes'
              className='inputStyle'
              onChange={(e) => setText(e.target.value)}
              value={text}
              onKeyDown={handleEnter}
            />
          </div>
        </Draggable>
      </AbsoluteFill>
    </>
  );
}

// doesn work if move to css file, so I placed here
const AbsoluteStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 30,
  backgroundColor: 'white',
};
