import React from 'react'

const List = ({items = [], onClick = f => f}) => (
   <span className="dropdown__list ellipsis">
      {
         items.map(item => 
            <span key={item.id} onClick={ () => onClick(item.id) } className="dropdown__list-item">{item.value}</span>
         )
      }
   </span>
)

export default List