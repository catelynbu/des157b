(function(){
  "use strict";
  console.log('reading js');

  const startbtn = document.querySelector('#start-btn');

  startbtn.addEventListener('click', function(){
    document.querySelector('#title').className = 'hide';

    document.querySelector('#scene1').className = 'show';

    
  })
})();