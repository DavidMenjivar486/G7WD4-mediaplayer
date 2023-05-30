import React, {useContext} from 'react'
import { TrackContext } from './context/Track';



export function Header() {

    const { trackInfo } = useContext(TrackContext);

    return(<header>
        <h1> PlaymusicGrupo7 - {trackInfo && (
          trackInfo.title
      )}</h1>
    </header>)
}