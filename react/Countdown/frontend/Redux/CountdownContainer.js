import Countdown from './Countdown'
import {tick, reset} from './actions'
import React from 'react'

const CountdownContainer = ({store}) => {
   let {count} = store.getState();
   
   return <Countdown count={count} tick={() => store.dispatch( tick() ) } reset={ (value) => store.dispatch( reset(value) ) }/>
}

export default CountdownContainer