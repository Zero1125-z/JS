//Since here is used "form" where we need to "submit" to get the result so we need to select form and work on it
const form=document.querySelector('form')

//if we try to define height first then this usecase will give us empty value....But since we need the value after entering so we do not write first
//const height= parseInt(document.querySelector('#height').value)    


form.addEventListener('submit',function (e){
    e.preventDefault()           //stop default action i.e either post or get action from sending value to server in the form of url

   const height= parseInt(document.querySelector('#height').value)    //SInce we are taking id so we use #....and also since it gives the value in the form of string so we need to wrap them in parenthesis () and use parseInt to convert the string into int...Also using ".value" at the end directly gives the value                
   const weight= parseInt(document.querySelector('#weight').value)   
   const results = document.querySelector('#results')

    //in case user gives wrong inputs, we are keeping these filters
    if (height === '' || height<0 || isNaN(height)){
        results.innerHTML=`Please enter valid height: ${height}`;
    }
    else if (weight === '' || weight<0 || isNaN(weight)){
         results.innerHTML=`Please enter valid weight: ${weight}`;
    }
    else
    {
        //formula of bmi to show the result...
        const bmi = (weight/((height*height)/10000)).toFixed(2);    //"toFixed(2)" is used so the decimal stops after 2 digits
        
        //to display
        if (bmi<18.5){
             results.innerHTML= `<span>${bmi}</span> You are underweight.`
        }
       else if (bmi >=18.5 && bmi <= 24.9){
            results.innerHTML= `<span>${bmi}</span> <i>You are Healthy.</i>`
        }
        else if (bmi>25.0 && bmi <=29.9){
            results.innerHTML= `<span>${bmi}</span>You are Overweight.`
        }
        else if (bmi > 30.0){
             results.innerHTML= `<span>${bmi}</span> You are in <b>Obesity</b>.`
        }
    }
});



