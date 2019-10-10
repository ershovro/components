import React from 'react'

export default function Arrow({isExpanded = false, onClick = f => f}) {
   return (
      <span className={'DropDown__input-arrowContainer ' + (isExpanded ? 'expanded' : '')} onClick={onClick}>  
         <svg
            className="DropDown__input-arrow"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fillRule="evenodd"> 
               <title>Открыть меню</title>
               <path d="M10 0L5 5 0 0z"></path>
         </svg>
      </span>
   )
}