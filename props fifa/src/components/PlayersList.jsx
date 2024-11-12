import React from 'react'
import PlayersCards from './PlayersCards'
import './playerslist.css'
import video from './footvideo.mp4'
const PlayersList = ({joueurs}) => {
  return (
    <div className='cardcontainer'>
      <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
  
      </video>
    </div>
        {joueurs.map(el=>
          <PlayersCards cardinfo={el}></PlayersCards>  
        )}
      {/* lenna mech tjini l info taa joueurs bch nasnaa behom cards (map) */}
    </div>
  )
}

export default PlayersList
