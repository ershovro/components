import Countdown from './Countdown'
import {tick, reset} from './actions'
import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
   count: state.count
})

const mapDispatchToProps = dispatch => ({
   tick() { 
      dispatch( tick() ) 
   },
   
   reset(value) {
      dispatch( reset(value) ) 
   }
})

const CountdownContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Countdown)

export default CountdownContainer