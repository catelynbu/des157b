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

    const days = document.querySelectorAll('.day');


    for (let i=0; i<emails.length; i++){
        emails[i].addEventListener('mouseover', function(){
            console.log('hover');
            days[i].style.backgroundColor = 'red';
        })
    }

})();

getData();