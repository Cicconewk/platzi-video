import React from 'react'
import Media from './media'
import '../../styles/playlist.css'

export default function Playlist (props) {
    return(
        <div className="playlist">
          { 
            props.playlist.map(media => {
              return <Media {...media} key={media.id} />
            })
          }
      </div>
    )
}