import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { AbsoluteFill } from "remotion";
import { ITextElement } from "../../general/interface";
import { useCurrentFrame } from "remotion";
import "./DraggableText.css";

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
  saveInformation,
  pause,
  play,
}: ITextElement) {
  const handleStop = (e: any, data: any) => {
    const position = {
      x: data.x,
      y: data.y,
    };
    setLocalPosition(position);
    saveInformation(position);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
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

  const frame = useCurrentFrame();
  return (
    <>
      <AbsoluteFill style={AbsoluteStyle}>
        <Draggable
          onStop={handleStop}
          bounds="parent"
          position={localPosition}
          onStart={() => pause()}
        >
          <div>
            <TextField
              id="inputText"
              helperText="Press enter to save changes"
              className="inputStyle"
              onChange={(e) => setText(e.target.value)}
              value={text}
              onKeyDown={handleEnter}
            />
          </div>
        </Draggable>
        <Box className="frameBox">Frame:{frame}</Box>
      </AbsoluteFill>
    </>
  );
}

const AbsoluteStyle = {
  justifyContent: "center",
  alignItems: "center",
  fontSize: 30,
  backgroundColor: "white",
};
