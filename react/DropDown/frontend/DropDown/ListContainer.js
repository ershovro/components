import React from 'react'

const ListContainer = ({isExpanded = false, children}) => (
   isExpanded         
      ? <span className={"dropdown__listContainer " + (isExpanded ? 'open': '')}>
           {children}  
        </span>        
      : null
)
                  
export default ListContainer