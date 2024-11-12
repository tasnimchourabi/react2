import React from 'react'
import './playerscard.css'




const PlayersCards = ({cardinfo}) => {
  return (
    <div  style={{ width: '20rem',marginTop:'3em' }}>
       <div className="hexagon-card">
      <div className="hexagon">
        <div className="hexagon-content">
          <img src={cardinfo.imageurl} style={{height:'370px'}} alt={cardinfo.name} className="hexagon-image" />
          <div className="hexagon-info">
            <h2>{cardinfo.name}</h2>
            <p>{cardinfo.age} <br />
            {cardinfo.equipe}
            </p>
            <button>More info</button>
          </div>
        </div>
      </div>
    </div>
       
    </div>
  )
}

PlayersCards.defaultProps={
    cardinfo:{
        name:'foulen fouleni',
        age:'100',
        equipe:'default',
        
    }
}
export default PlayersCards
