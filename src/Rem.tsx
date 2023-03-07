import { AbsoluteFill, useCurrentFrame } from 'remotion';
export default function Rem() {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
        backgroundColor: 'white',
      }}
    >
      The current frame is {frame}.
    </AbsoluteFill>
  );
}
