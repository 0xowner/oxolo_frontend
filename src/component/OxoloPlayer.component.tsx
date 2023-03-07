import { Player } from '@remotion/player';
import Rem from '../Rem';

export default function OxoloPlayer() {
  return (
    <Player
      component={Rem}
      compositionWidth={1000}
      compositionHeight={400}
      durationInFrames={1000}
      fps={60}
      controls
      loop
      clickToPlay={false}
    />
  );
}
