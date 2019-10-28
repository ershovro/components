import React from 'react'
import {render} from 'react-dom'
import storeFactory from './storeFactory'
import CountdownContainer from './CountdownContainer'

const store = storeFactory();

const myRender = () => {
   render(
      <CountdownContainer store={store}/>,
      document.getElementById('root')
   ) 
}

store.subscribe( myRender )

myRender();

