import React, {useContext} from 'react'
import { Header } from '../Header';
import { TrackCard } from '../TrackCard';
import { TrackProvider } from '../context/Track';
import MusicBar from '../MusicBar';

export function App() {
	return (
		<TrackProvider>
			<div className="App_main">
				<div className='inside'>
					<Header></Header>
					<TrackCard></TrackCard>
          <MusicBar></MusicBar>
					{/*<Controls></Controls>*/}
				</div>
				{/*<Lyrics></Lyrics>*/}
			</div>
		</TrackProvider>
  );
}

export default App;
