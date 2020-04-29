import React from 'react'

const InputValue = ({selectedId = null, placeHolder = '', items = []}) => (
   selectedId
      ? items.filter( item => item.id === selectedId)[0].value         
      : <span className="DropDown__input-placeHolder">{placeHolder}</span>
)

export default InputValue