async function getData(){
    const myEmails = await fetch('data.json');
    const data = await myEmails.json();
    console.log(data);

    const numbers = document.querySelectorAll('.numbers');

    const days = Object.keys(data);

    for (let i=0; i<numbers.length; i++){
        numbers[i].innerHTML = outputHTML(data[days[i]]);
    }


}

function outputHTML (dayData){

    let html = ' ';

    html += `<p>${dayData.received} received</p>`
    html += `<p>${dayData.deleted} deleted</p>`

    return html;
}

(function(){
    "use strict";
    
    const emails = document.querySelectorAll('.email');

    const numbers = document.querySelectorAll('.numbers');
    const notif = document.querySelectorAll('.dot')


    for (let i=0; i<emails.length; i++){
        emails[i].addEventListener('mouseover', function(){
            console.log('on');
            numbers[i].classList.remove('hidden');
            numbers[i].classList.add('show');
            
            emails[i].classList.remove('jiggle');

            notif[i].style.opacity = '0';
        })

        emails[i].addEventListener('mouseout', function(){
            console.log('out');
            numbers[i].classList.remove('show');
            numbers[i].classList.add('hidden');
        })
    }


    // const myForm = document.querySelector('form');

    // myForm.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     processFormData(formData);
    // })

    // function processFormData(formData){
    //     if (input = 5){
    //         alert('you said 5 emails');
    //     }
    // }

})();

getData();