import React from 'react'
import ReactDom from 'react-dom'
import DropDown from './DropDown'
import {Dispatcher} from 'flux'
import EventEmitter from 'events'

const items = [{
      id: 1,
      value: 'item 1'
   }, {
      id: 2,
      value:'item 2'
   }, {
      id: 3,
      value: 'item 3'
   }];
   
/*
 <Мини Flux приложение>
*/



class CountdownDispatcher extends Dispatcher {
   handleAction(action) {
      console.log(action);
      
      this.dispatch({
         source: 'VIEW_ACTION',
         action
      });
   }
}

const appAction = (dispatcher) => ({
   tick() {
      dispatcher.handleAction({
         type: 'TICK'
      })
   },
   
   reset(value) {
      dispatcher.handleAction({ 
         type: 'RESET',
         value
      })
   }
})

class Store extends EventEmitter {
   constructor(count = 10, dispatcher) {
      super();
      
      this._count = count;
      dispatcher.register(
         this.dispatch.bind(this)
      );
   }
   
   get count () {
      return this._count;
   }
   
   dispatch(meta) {
      let {action} = meta;
      
      switch(action.type) {
         case 'TICK': 
            this._count = this._count - 1;
            this.emit('TICK');
            break;
         case 'RESET':
            this._count = action.value;
            this.emit('RESET');
            break;
      }      
   }
}
    
const Countdown = ({count = 0, tick = f=>f, reset = f=>f}) => {
   
   if (count) {
      setTimeout(tick, 1000);
   }
   
   return count ?
      <span> {count} </span> :     
      <span onClick={ () => reset(10) }> countdown finished, click to restart </span>     
}


let appDispatcher = new CountdownDispatcher();
let actions = appAction(appDispatcher);
let store = new Store(10 , appDispatcher);

const render = (count) => {
   ReactDom.render(
      <Countdown count={count} {...actions}/>,
      document.getElementById('root')
   );
}

store.on('TICK', () => {
   render(store.count);
});

store.on('RESET', () => {
   render(store.count);
});

render(store.count);
/*
 </Мини Flux приложение>
*/
      
/*ReactDom.render(
  // <DropDown items={items}/>,   
   document.getElementById('root')
)*/