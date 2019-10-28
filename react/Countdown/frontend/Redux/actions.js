import C from './constants'

export const tick = () => ({
   type: C.TICK
})
   
export const reset = (value) => ({    
   type: C.RESET,
   value
})