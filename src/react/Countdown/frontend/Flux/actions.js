const actions = (dispatcher) => ({
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

export default actions
