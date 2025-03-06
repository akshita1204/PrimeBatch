import React from 'react'

function card({username}) {
  return (
    <div className='card'>
            <h3>Hello {username}!</h3>
            <p>Nice to meet you {TITLE}!</p>
    </div>
  )
}

export default card;
export const TITLE="Akshita!";