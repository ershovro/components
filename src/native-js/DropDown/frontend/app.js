import DropDown from './DropDown';

let dropDown = new DropDown({
   label: 'Menu',
   items: ['1 item', '2 item', '3 item']
});

document.body.appendChild(dropDown.elem);