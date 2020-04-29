import React from 'react'

const Countdown = ({count = 0, tick = f=>f, reset = f=>f}) => {   
   if (count) {
      setTimeout(tick, 1000);
   }
   
   return count ?
      <span> {count} </span> :     
      <span onClick={ () => reset(10) }> countdown finished, click to restart </span>     
}

export default Countdown
