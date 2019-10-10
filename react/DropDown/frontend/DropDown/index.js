import React from 'react'
import PropTypes from 'prop-types'
import InputValue from './InputValue.js'
import ListContainer from './ListContainer.js'
import List from './List.js'
import Arrow from './Arrow.js'
import './DropDown.css'

class DropDown extends React.Component {
   constructor(props) {
      super(props);
      this.state = {      
        selectedId: props.selectedId,
        isExpanded: false
      };
      this.expandCollapse = this.expandCollapse.bind(this);
      this.changeSelectedId = this.changeSelectedId.bind(this);
      this.handlerListItemClick = this.handlerListItemClick.bind(this);
   }
   
   expandCollapse() {
      this.setState({
         isExpanded: !this.state.isExpanded
      });  
   } 
   
   changeSelectedId(id) {
      this.setState({
         selectedId: id
      });   
   }   
   
   handlerListItemClick(itemId) {
      this.changeSelectedId(itemId);
      this.expandCollapse();
   }   
   
   render() {
      let 
         {isExpanded, selectedId} = this.state,
         {items, label, placeHolder} = this.props;
      
      return (
         <div className="DropDown">
            <span className="DropDown__input">
               <span className="DropDown__input-label">{label}</span>               
               <span tabIndex="0" className="DropDown__input-value">
                  <InputValue selectedId={selectedId} placeHolder={placeHolder} items={items}/>
               </span>                
               <Arrow isExpanded={isExpanded} onClick={this.expandCollapse}/>           
            </span>
            <ListContainer isExpanded={isExpanded}>
               <List items={items} onClick={this.handlerListItemClick}/>
            </ListContainer>
         </div>
      )
   }
}

DropDown.propTypes = {
   label: PropTypes.string,
   placeHolder: PropTypes.string,
   items: PropTypes.array,
   selectedId: PropTypes.number
}

DropDown.defaultProps = {
   label: '',
   placeHolder: 'select value',
   items: [],
   selectedId: null
}

export default DropDown