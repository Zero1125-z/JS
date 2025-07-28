//SO initially I have to select the button 
//And according to the color of that button, then I have to select the body so that the color of that body gets changed
const selectbutton =document.querySelectorAll('.button')       //here the variable "selectbutton" selects all the buttons
//now we have to select the body
const selectbody = document.querySelector('body')
//now we need to assign function to each buttons
selectbutton.forEach(function (button){
    console.log(button);
button.addEventListener('click',function(e){       //here an event is added "click" which on click triggers a function
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'red'){
        selectbody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'green'){
        selectbody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
        selectbody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
        selectbody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'cyan'){
        selectbody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'beige'){
        selectbody.style.backgroundColor = e.target.id
    }


})




})
