(function(){
  "use strict";
  console.log('reading js');

  const startbtn = document.querySelector('#start-btn');

  startbtn.addEventListener('click', function(){
    document.querySelector('#title').className = 'hide';

    document.querySelector('#scene1').className = 'show';

  })

  const option1 = document.querySelector('#option1');

  option1.addEventListener('click', function(){
    // document.querySelector('.messsages').innerHTML += '<p class="user-message">I chose this option.</p>'
    
    console.log('bleep');
  })



})();