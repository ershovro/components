import React from 'react'

const List = ({isExpanded = false, items = [], onClick = f => f}) => (
   isExpanded         
      ? <span className={"dropdown__listContainer " + (isExpanded ? 'open': '')}>
           <span className="dropdown__list ellipsis">
              { 
                 items.map(item => 
                    <span key={item.id} onClick={ () => onClick(item.id) } className="dropdown__list-item">{item.value}</span>
                 )
              }
           </span>   
        </span>        
      : null
)
                  
export default List