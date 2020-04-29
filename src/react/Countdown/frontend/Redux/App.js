import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import storeFactory from './storeFactory'
import CountdownContainer from './CountdownContainer'

const store = storeFactory();

render(
   <Provider store={store}>
      <CountdownContainer/>
   </Provider>,
   document.getElementById('root')
)