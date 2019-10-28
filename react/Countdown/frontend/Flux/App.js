import React from 'react'
import ReactDom from 'react-dom'
import CountdownDispatcher from './CountdownDispatcher'
import actions from './actions'
import Store from './Store'
import Countdown from './Countdown'

let appDispatcher = new CountdownDispatcher();
let appActions = actions(appDispatcher);
let appStore = new Store(10 , appDispatcher);

const render = (count) => {
   ReactDom.render(
      <Countdown count={count} {...appActions}/>,
      document.getElementById('root')
   );
}

appStore.on('TICK', () => {
   render(appStore.count);
});

appStore.on('RESET', () => {
   render(appStore.count);
});

render(appStore.count);   