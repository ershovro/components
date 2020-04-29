import EventEmitter from 'events'

export default class Store extends EventEmitter {
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