import {Dispatcher} from 'flux'

export default class CountdownDispatcher extends Dispatcher {
   handleAction(action) {
      console.log(action);
      
      this.dispatch({
         source: 'VIEW_ACTION',
         action
      });
   }
}