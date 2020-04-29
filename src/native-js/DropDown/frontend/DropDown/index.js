import './DropDown.css';

const createElement = (control) => {
      let elem = document.createElement('div');

      elem.className = 'DropDown';
      elem.innerHTML = template(control);

      return elem;
} 
   
const getSelectedValue = (control) =>  
    typeof control.selectedId === 'number'
      ? control.items.filter( item => item.id === control.selectedId)[0].value
      : null;
   
const calculateInputContent = (control) =>
   typeof control.selectedId === 'number'
      ? getSelectedValue(control)
      : `<span class="DropDown__input-placeHolder">${control.placeHolder}</span>`            
     
const arrowClickHandler = (control) => {
   control.elem.getElementsByClassName('DropDown__input-arrowContainer')[0].classList.toggle('expanded'); 
   control.elem.getElementsByClassName('dropdown__listContainer')[0].classList.toggle('open');
}        

const listClickHandler = (...args) => {
   let
      [event, control] = args,   
      selectedId = Number(event.target.id);
         
      control.selectedId = selectedId; 
      control.elem.getElementsByClassName('DropDown__input-value')[0].innerHTML =
      calculateInputContent(control);
      arrowClickHandler(control);   
}  
   
const setHendlers = (control) => {
   control.elem.getElementsByClassName('DropDown__input-arrowContainer')[0].onclick = arrowClickHandler.bind(null, control);
   control.elem.getElementsByClassName('dropdown__list')[0].onclick = (...args) => listClickHandler.apply(null, [...args, control]);
}
         
const template = (control) =>
   `  <span class="DropDown__input">
         <span class="DropDown__input-label">${control.label}</span>
         <span class="DropDown__input-value">
            ${ calculateInputContent(control) }             
         </span>
         <span class="DropDown__input-arrowContainer">
            <svg
               class="DropDown__input-arrow"
               width="10"
               height="5"
               viewBox="0 0 10 5"
               fill-rule="evenodd"> 
                  <title>Открыть меню</title>
                  <path d="M10 0L5 5 0 0z"></path>
            </svg>
         </span>    
      </span>
      
      <span class="dropdown__listContainer">      
         <span class="dropdown__list ellipsis">
            ${control.items.map(item => `<span id=${item.id} class="dropdown__list-item">${item.value}</span>`).join('')}
         </span>
      </span>
   `

export default class DropDown {
   constructor({
      label = '',
      placeHolder = 'select value',
      items = [],
      selectedId = null
   } = {}) {
      this.label = label;
      this.placeHolder = placeHolder;
      this.items = [...items].map( (item, i) => ({id: i, value: item, isSelected: false}));
      this.selectedId = selectedId;
      this.elem = createElement(this); 
      
      setHendlers(this);
   }
}