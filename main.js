'use strict';

// setting selectors for elements
const modal = document.querySelector('.modal'); 
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close'); 
const btnOpen = document.querySelectorAll('.show'); 


//Opens modal on click
const openModal = function(){
    console.log('click')
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


//Hides modal on close and if pressed anywhere that is not on the modal. 
const hideModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i = 0; i < btnOpen.length; i++){
    btnOpen[i].addEventListener('click', openModal);
}

// closing modal through click
btnClose.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)


//closing modal with esc-key
document.addEventListener('keydown', function(e) {

    if(e.key == 'Escape')
        if(!modal.classList.contains('hidden')){
            hideModal();
        }
   
});
