import React from 'react'
import ReactDom from 'react-dom'
import DropDown from './DropDown'

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
      
ReactDom.render(
   <DropDown items={items}/>,   
   document.getElementById('root')
)