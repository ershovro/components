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

/*

class CountDown extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: props.count || 10,
         isActive: false
      }
      
      this.tick = this.tick.bind(this);
      this.stop = this.stop.bind(this);
      this.start = this.start.bind(this);
      this.reset = this.reset.bind(this);
      this.restart = this.restart.bind(this);
   }
   
   tick() {
      this.setState({
         count: --this.state.count
      });
   }
   
   stop() {
      this.setState({
         isActive: false         
      });
      clearInterval(this.timer);
   }
   
   start() {
      this.setState({
         isActive: true         
      });
      this.timer = setInterval(this.tick, 1000);
   }
   
   reset(value) {
      this.setState({
         count: value
      });
   }
   
   restart(value = 10) {
      let {isActive} = this.state;
                 
      if (isActive) {
         this.stop();
      }
      
      this.reset(value);
      this.start();
   }
   
   componentWillMount() {
      this.start();
   }
      
   componentWillUpdate(newxtProps, nextState) {
      if (nextState.count === 0) {
         clearInterval(this.timer);
         nextState.isActive = false;
      }
      
   }
   
   componentWillUnmount() {
      this.stop();
   }
   
   render() {
      let {count, isActive} = this.state;
      let {stop, restart, start} = this;
      
      let status = count > 0 ?
         <span>Timer: {count}</span> :
         <span>Timer is over. Click to <button onClick={() => restart(10)}>restart</button></span>
      
      return (
         <div>
            <span>{status}</span>         
               { isActive ? <button onClick={stop}>click to stop timer</button> : <button onClick={start}>click to start timer</button> }
         </div>
      )
   }
}


ReactDom.render(
   <CountDown/>,
   document.getElementById('root')
);*/