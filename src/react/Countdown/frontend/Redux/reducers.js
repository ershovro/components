import C from './constants'

export const count = (state = 0, action) => {
   switch(action.type) {
      case C.TICK:
         return --state;
      case C.RESET:
         return action.value;
      default:
         return state;
   }   
}