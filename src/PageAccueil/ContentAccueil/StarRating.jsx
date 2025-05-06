import React from 'react'

function StarRating({rating}) {

    const stars = [];

    for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
        stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
    }
    else if (rating >= i - 0.5) {
        stars.push(<span key={i} style={{ 
        background: 'linear-gradient(90deg, gold 50%, lightgray 50%)', 
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
        }}>★</span>);
    }
    else {
        stars.push(<span key={i} style={{ color: 'lightgray' }}>★</span>);
    }
    }

  return (
    <div>
        <div style={{ fontSize: '25px', fontWeight:'bold'}}>
            {stars}
        </div>
    </div>
  )
}

export default StarRating