"use strict";


const input = document.querySelector("#passwordInput");

const eye = document.querySelector("#eyeWrapper");

console.log(input,eye);

eye.addEventListener('click',()=>{
    if(input.getAttribute('type')==='password'){
        input.setAttribute('type','text');
        eye.innerHTML=`<i class='bx bxs-low-vision'></i>`;
    }else{
        input.setAttribute('type','password');
        eye.innerHTML=`  <i class="bx bx-show-alt" id="eye"></i>`;
    }
})

