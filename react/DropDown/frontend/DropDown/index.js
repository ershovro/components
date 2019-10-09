import React from 'react'
import PropTypes from 'prop-types'
import InputValue from './InputValue.js'
import List from './List.js'
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
      return (
         <div className="DropDown">
            <span className="DropDown__input">
               <span className="DropDown__input-label">{this.props.label}</span>               
               <span className="DropDown__input-value">
                  <InputValue {...this.props} {...this.state} />
               </span>
               <span className={'DropDown__input-arrowContainer ' + (this.state.isExpanded ? 'expanded' : '')} onClick={this.expandCollapse}>
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
            </span>
            <List isExpanded={this.state.isExpanded} items={this.props.items} onClick={this.handlerListItemClick}/>
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