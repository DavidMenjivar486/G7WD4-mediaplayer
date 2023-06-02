import React, {useContext} from 'react'
import { Header } from '../Header';
import { TrackCard } from '../TrackCard';
import { TrackProvider } from '../context/Track';
import MusicBar from '../MusicBar';
import { MusicControls } from '../Controls';
import { Lyrics } from '../Lyrics';
import { VolumeControl } from '../Volume';

export function App() {
	return (
		<TrackProvider>
			<div className="App_main">
				<div className='inside'>
					<Header></Header>
					<TrackCard></TrackCard>
					<MusicControls></MusicControls>
          			<MusicBar></MusicBar>
					<VolumeControl></VolumeControl>
					<Lyrics></Lyrics>
				</div>
			</div>
		</TrackProvider>
  );
}

export default App;
